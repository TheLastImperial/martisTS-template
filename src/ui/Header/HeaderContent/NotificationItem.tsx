import { MessageOutlined } from "@ant-design/icons";
import {
  Avatar,
  Divider,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from "@mui/material"
import { ReactNode } from "react";

export interface NotificationItemProps {
  color?: string;
  bgcolor?: string;
  icon?: ReactNode,
  primaryTxt: ReactNode,
  secondaryTxt: ReactNode,
  caption: string
}

export const NotificationItem = ({
  color='primary.main',
  bgcolor='primary.lighter',
  icon,
  primaryTxt,
  secondaryTxt,
  caption,
}: NotificationItemProps)=>{
  return (
    <>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            sx={{
              color,
              bgcolor,
            }}
          >
            {
              !icon &&
              <MessageOutlined />
            } {/* Puede ser un icono o una letra */}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            primaryTxt
          }
          secondary={ secondaryTxt }
        />
        <ListItemSecondaryAction>
          <Typography variant="caption" noWrap>
            { caption }
          </Typography>
        </ListItemSecondaryAction>
      </ListItemButton>
      <Divider />
    </>
  )
}
