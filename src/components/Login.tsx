import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Divider,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

interface LoginProps {
  onLogin: (email: string, password: string) => Promise<void>;
  onVisitorLogin: () => Promise<void>;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onVisitorLogin }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignup) {
        await signup(name, email, password);
      } else {
        await onLogin(email, password);
      }
    } catch (err) {
      setError(isSignup ? 'Failed to create account' : 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: isMobile ? 0 : 2,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://framerusercontent.com/images/SAStOCLXaYx95TJ2QmQ75e3Mg0k.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
          zIndex: -1,
          filter: 'brightness(0.3) contrast(1.2) saturate(0.8)',
        },
        '&::after': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(45deg, rgba(255,215,0,0.05) 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          padding: theme.spacing(4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: theme.spacing(3),
          width: '100%',
          maxWidth: 400,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 215, 0, 0.15)',
          borderRadius: '12px',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.5),
            0 0 8px rgba(255, 215, 0, 0.05),
            0 0 16px rgba(255, 215, 0, 0.05)
          `,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -1,
            left: -1,
            right: -1,
            bottom: -1,
            background: 'linear-gradient(45deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05), rgba(255,255,255,0.05), rgba(255,215,0,0.15))',
            borderRadius: '13px',
            zIndex: -1,
            animation: 'borderGlow 4s ease-in-out infinite',
          },
          '@keyframes borderGlow': {
            '0%': {
              opacity: 0.3,
            },
            '50%': {
              opacity: 0.6,
            },
            '100%': {
              opacity: 0.3,
            },
          },
          [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
            maxWidth: '100%',
            margin: theme.spacing(2),
            gap: theme.spacing(2),
          },
        }}
      >
        <Typography 
          variant="h5" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 600, 
            color: '#ffffff',
            fontSize: isMobile ? '1.5rem' : '1.75rem',
            textAlign: 'center',
            textShadow: '0 0 8px rgba(255,215,0,0.2)',
            background: 'linear-gradient(to right, #ffffff 20%, #FDEB91 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.5px',
          }}
        >
          Meta Mansion
        </Typography>
        <Typography 
          variant="body2" 
          color="textSecondary" 
          sx={{ 
            mb: 2,
            textAlign: 'center',
            fontSize: isMobile ? '0.875rem' : '1rem',
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          {isSignup ? 'Create your account' : 'Sign in to access your portfolio'}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: '100%', bgcolor: 'rgba(211, 47, 47, 0.1)' }}>
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
              sx={{ 
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 215, 0, 0.3)',
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
                },
                '& .MuiInputBase-input': {
                  color: '#ffffff',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: '#FFD700' }} />
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
            sx={{ 
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.3)',
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
              },
              '& .MuiInputBase-input': {
                color: '#ffffff',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#FFD700' }} />
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
            sx={{ 
              mb: 3,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.3)',
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
              },
              '& .MuiInputBase-input': {
                color: '#ffffff',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: '#FFD700' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    size={isMobile ? "small" : "medium"}
                    sx={{ color: '#FFD700' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
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
            sx={{
              background: 'linear-gradient(45deg, rgba(255,215,0,0.08), rgba(255,215,0,0.15))',
              border: '1px solid rgba(255,215,0,0.2)',
              color: '#FFD700',
              backdropFilter: 'blur(5px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(45deg, rgba(255,215,0,0.15), rgba(255,215,0,0.2))',
                borderColor: 'rgba(255,215,0,0.4)',
                boxShadow: '0 0 10px rgba(255,215,0,0.1)',
                transform: 'translateY(-1px)',
              },
              py: isMobile ? 1 : 1.5,
            }}
          >
            {loading ? (isSignup ? 'Creating Account...' : 'Signing in...') : (isSignup ? 'Create Account' : 'Sign In')}
          </Button>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button
              onClick={() => {
                setIsSignup(!isSignup);
                setError('');
              }}
              sx={{ 
                color: '#ffffff',
                fontSize: isMobile ? '0.875rem' : '1rem',
              }}
            >
              {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </Button>
          </Box>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography variant="body2" color="textSecondary">
            OR
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        <Button
          fullWidth
          variant="outlined"
          onClick={onVisitorLogin}
          startIcon={<PersonIcon sx={{ color: '#FFD700' }} />}
          sx={{
            borderColor: 'rgba(255,215,0,0.2)',
            color: '#FFD700',
            background: 'linear-gradient(45deg, rgba(255,215,0,0.03), rgba(255,215,0,0.08))',
            backdropFilter: 'blur(5px)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(45deg, rgba(255,215,0,0.08), rgba(255,215,0,0.12))',
              borderColor: 'rgba(255,215,0,0.4)',
              boxShadow: '0 0 10px rgba(255,215,0,0.1)',
              transform: 'translateY(-1px)',
            },
            py: isMobile ? 1 : 1.5,
          }}
        >
          Continue as Visitor
        </Button>
      </Box>
    </Box>
  );
}; 