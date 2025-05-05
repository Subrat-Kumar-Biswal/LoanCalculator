import React from 'react';
import {
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        About This App
      </Typography>

      {/* Description */}
      <Typography variant="body1" paragraph>
        This Loan Calculator App is a modern, single-page web application built using <strong>React JS</strong> and <strong>Material UI</strong>. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Instructions */}
      <Box display="flex" alignItems="center" gap={1}>
        <AssignmentIcon />
        <Typography variant="h6">Instructions for Candidates</Typography>
      </Box>

      <List dense>
        {[
          'Push the entire project to a public GitHub repository.',
          'Make sure to commit regularly with clear messages after completing each feature.',
          'Use the provided EMI formula to perform calculations.',
          'Use Context API for global state management (e.g. theme, currency).',
          'Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates).',
          'Integrate the ExchangeRate API for live currency conversion.',
          'Ensure the app is fully responsive on all screen sizes.',
          'Implement both light and dark modes using Material UI\'s theming system.',
          'Add a 404 Not Found page for unmatched routes.',
          'Handle runtime errors gracefully by showing an Error Page.',
          'Once deployed, add the live deployment link in the About section of your GitHub repo.',
          'Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages).',
        ].map((text, idx) => (
          <ListItem key={idx}>
            <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
        ✅ Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Features */}
      <Box display="flex" alignItems="center" gap={1}>
        <BuildIcon />
        <Typography variant="h6">Features</Typography>
      </Box>

      <List dense>
        <ListItem>
          <ListItemText primary="Loan EMI calculation using standard financial formulas" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Responsive design using Material UI components" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Live currency conversion using ExchangeRate API" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Context API and custom hooks for clean state management" />
        </ListItem>
      </List>
      <Typography variant="body2" mb={3}>
        You must register and obtain a free API key to use this endpoint. Then, replace <code>YOUR_API_KEY</code> in the app code with your actual key.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Purpose Section */}
      
      <Typography variant="body1" gutterBottom>
        This project is designed to assess a candidate's React development skills, including:
      </Typography>
      <Typography variant="body2" mt={2} color="warning.main">
        ✨ For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
      </Typography>
    </Container>

  );
};

export default About;
