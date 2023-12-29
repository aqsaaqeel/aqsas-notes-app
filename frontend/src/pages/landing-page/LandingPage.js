import { Box } from "@mui/material";

export const LandingPage = () => {
  return (
    <Box sx={{ display: "flex", marginTop: "10rem",justifyContent: "space-around" }}>
      {" "}
      <div>This is a landing page</div>

      <button>Login</button>
      <button>Sign up</button>
    </Box>
  );
};
