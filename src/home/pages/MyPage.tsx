import { Typography } from "@mui/material";
import { MainCard } from "src/components";
import { UI } from "src/ui";

export const MyPage = ()=>{

  return (<>
    <UI>
      <MainCard title="My Page">
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ipsam repellendus? Quas porro voluptatum officia in odio earum culpa neque. Repellendus, officiis beatae obcaecati quibusdam odit enim quisquam? Mollitia, minima.
        </Typography>
      </MainCard>
    </UI>
  </>);
}
