import { MoonOutlined, SunOutlined } from "@ant-design/icons"
import { Box, IconButton } from "@mui/material"
import { useUIStore } from "src/ui/hooks"

export const DarkMode = ()=>{
  const { darkMode, startSetDarkMode } = useUIStore();
  return (
    <Box>
      <IconButton
        color="secondary"
        sx={{
          color: 'text.primary',
        }}
        onClick={ () => {
          startSetDarkMode(!darkMode)
        }}
      >
        {
          darkMode ?
          <SunOutlined/>
          :
          <MoonOutlined/>
        }
      </IconButton>
    </Box>
  )
}