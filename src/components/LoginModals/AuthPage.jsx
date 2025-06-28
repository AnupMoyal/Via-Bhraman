import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Paper,
  Slide,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const togglePage = () => setIsLogin(!isLogin);

  const formVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${isLogin
            ? "/path-to-image2.jpg"
            : "/path-to-image1.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 6,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => console.log("Closed")}
            sx={{ alignSelf: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>

          <motion.div
            key={isLogin ? "login" : "register"}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={formVariants}
            transition={{ duration: 0.4 }}
            style={{ width: "100%" }}
          >
            <Typography component="h1" variant="h4" fontWeight={700} mb={3}>
              {isLogin ? "Login" : "Register"}
            </Typography>
            <Box component="form" noValidate>
              {!isLogin && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="User Name"
                  name="username"
                  autoComplete="username"
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                label={isLogin ? "Username or email address" : "Email"}
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {!isLogin && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}

              {isLogin && (
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#d58e2b", cursor: "pointer" }}
                  >
                    Forgot password?
                  </Typography>
                </Box>
              )}

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: "1rem",
                  backgroundColor: "#d59b2b",
                  textTransform: "none",
                  borderRadius: 2,
                  '&:hover': { backgroundColor: "#c4881d" },
                }}
              >
                {isLogin ? "Login" : "Create A New Account"}
              </Button>
              <Box mt={3} textAlign="center">
                <Typography variant="body2">
                  {isLogin ? "Don't you have an account?" : "Already have an account?"}
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ color: "#d58e2b", ml: 1, cursor: "pointer" }}
                    onClick={togglePage}
                  >
                    {isLogin ? "Register" : "Login Here"}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthPage;
