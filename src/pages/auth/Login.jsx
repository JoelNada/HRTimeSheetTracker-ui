import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = () => (data) => {
    console.log('Form submitted with data:', data);
    // Here you would typically handle the login logic, e.g., API call
  };
  return (
    <Container maxWidth="lg">
      {/* Full-height center using flexbox */}
      <div
        component="main"
        style={{
          minHeight: '95vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Card */}
        <Paper
          elevation={6}
          square
          sx={{
            width: '100%',
            maxWidth: 520,
            p: { xs: 3, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Hi There, Please Login!
          </Typography>

          <form onSubmit={handleSubmit(formSubmit())}>
            {/* Username */}
            <TextField
              {...register('username', { required: 'Username is required' })}
              margin="normal"
              fullWidth
              label="Username"
              placeholder="Enter Username"
              variant="outlined"
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ''}
            />

            {/* Password */}
            <TextField
              {...register('password', { required: 'Password is required' })}
              margin="normal"
              fullWidth
              label="Password"
              placeholder="Enter password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((s) => !s)}
                      edge="end"
                      aria-label={
                        showPassword ? 'Hide password' : 'Show password'
                      }
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />

            {/* Submit */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
            >
              Submit
            </Button>
          </form>

          {/* Forgot Password */}
          <Box textAlign="right">
            <Link href="#" variant="body2">
              Forgot your Password?
            </Link>
          </Box>

          {/* Sign Up */}
          <Box mt={3} textAlign="center">
            <Typography variant="body2">
              Need to Sign Up?{' '}
              <Link href="#" variant="body2">
                Click here to Sign up
              </Link>
            </Typography>
          </Box>

          {/* Footer */}
          <Typography
            variant="caption"
            color="text.secondary"
            align="center"
            sx={{ mt: 4 }}
          >
            © Dev App 2025
          </Typography>
        </Paper>
      </div>
    </Container>
  );
}
