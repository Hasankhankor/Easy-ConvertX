import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import { Box, CssBaseline, Container, Typography } from '@mui/material'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const Layout = ({ children }) => {
  const router = useRouter()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        paddingTop: '65px',
        paddingLeft: {
          xs: '57px',
          sm: '65px',
          md: open ? '240px' : '65px',
        },
      }}
    >
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container
          sx={{
            minHeight: 'calc(100vh - 65px)',
            display: 'flex',
            flexDirection: 'column',  // Ensures content is stacked vertically
            alignItems: 'flex-start', // Align items slightly to the right
            justifyContent: 'center', // Vertically center the input fields
            ml: 50,                   // Shift the content to the right
          }}
        >
          {/* Heading Section */}
          <Typography
            variant="h4"
            component="h1"
            sx={{
              position: 'absolute',  // Keeps the heading at the top
              top: '30px',           // Adjust the distance from the top
              textAligncenter: 'center',
              width: '100%',
              color: '#F56539'
                      // Center the heading horizontally
            }}
          >
      Easy ConvertX
          </Typography>

          {/* Input Fields Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',  // Stack input fields vertically
              alignItems: 'center',     // Center input fields horizontally
              gap: 3,                   // Add some space between the inputs
              mt: 3,                    // Add margin from the heading
            }}
          >
            {children}  {/* Input fields/components will be passed here */}
          </Box>

        </Container>
        <p style={{ textAlign: 'center' }}>@Khankor</p>
      </Box>

    </Box>
  )
}

export default Layout
