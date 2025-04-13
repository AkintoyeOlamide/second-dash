import * as React from 'react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Alert,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { styled } from '@mui/material/styles';

const LogoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '16px'
});

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, initialMode = 'signin' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isSignup, setIsSignup] = useState(initialMode === 'signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, signup, loginAsVisitor } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignup) {
        await signup(name, email, password);
      } else {
        await login(email, password);
      }
      onClose();
    } catch (err) {
      setError(isSignup ? 'Failed to create account' : 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleVisitorLogin = async () => {
    try {
      await loginAsVisitor();
      onClose();
    } catch (err) {
      setError('Failed to login as visitor');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          width: '100%',
          maxWidth: '320px',
          margin: '16px',
          border: '1px solid rgba(255, 215, 0, 0.2)',
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      <DialogContent sx={{ p: isMobile ? 2 : 2.5 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 2
        }}>
          <img 
            src="/gold-logo.PNG"
            alt="Gold Logo"
            style={{
              height: '40px',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 2px 4px rgba(255, 215, 0, 0.3))'
            }}
          />
        </Box>

        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            mb: 2.5,
            color: '#ffffff',
            fontSize: isMobile ? '1.25rem' : '1.5rem',
          }}
        >
          {isSignup ? 'Create Account' : 'Sign In'}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2, bgcolor: 'rgba(211, 47, 47, 0.1)', fontSize: '0.875rem' }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          {isSignup && (
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              size="small"
              sx={{ 
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 215, 0, 0.3)',
                    borderWidth: '1px',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 215, 0, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFD700',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.875rem',
                },
                '& .MuiInputBase-input': {
                  color: '#ffffff',
                  fontSize: '0.875rem',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: '#ffffff', fontSize: '1.25rem' }} />
                  </InputAdornment>
                ),
              }}
            />
          )}

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            size="small"
            sx={{ 
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.3)',
                  borderWidth: '1px',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFD700',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.875rem',
              },
              '& .MuiInputBase-input': {
                color: '#ffffff',
                fontSize: '0.875rem',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#ffffff', fontSize: '1.25rem' }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            size="small"
            sx={{ 
              mb: 2.5,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.3)',
                  borderWidth: '1px',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFD700',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.875rem',
              },
              '& .MuiInputBase-input': {
                color: '#ffffff',
                fontSize: '0.875rem',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: '#ffffff', fontSize: '1.25rem' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    size="small"
                    sx={{ color: '#ffffff' }}
                  >
                    {showPassword ? <VisibilityOff sx={{ fontSize: '1.25rem' }} /> : <Visibility sx={{ fontSize: '1.25rem' }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            size="small"
            sx={{
              mb: 1.5,
              backgroundColor: '#000000',
              fontSize: '0.875rem',
              py: 1,
              border: '1px solid rgba(255, 215, 0, 0.3)',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderColor: '#FFD700',
              },
            }}
          >
            {loading ? (isSignup ? 'Creating Account...' : 'Signing in...') : (isSignup ? 'Create Account' : 'Sign In')}
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleVisitorLogin}
            size="small"
            sx={{
              mb: 1.5,
              borderColor: 'rgba(255, 215, 0, 0.3)',
              color: '#ffffff',
              fontSize: '0.875rem',
              py: 1,
              '&:hover': {
                borderColor: '#FFD700',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
              },
            }}
          >
            Continue as Visitor
          </Button>

          <Button
            onClick={() => {
              setIsSignup(!isSignup);
              setError('');
            }}
            size="small"
            sx={{ 
              width: '100%',
              color: '#ffffff',
              fontSize: '0.875rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                color: '#FFD700',
              },
            }}
          >
            {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}; 