import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileCard";
import Mathibela from "../../images/board/Bongani Mathibela-Organised Business.JPG";
import Minister from "../../images/board/Minister of Higher Education, Science and Technology Dr Blade Nzimande NGI_8470.jpg";
import James from "../../images/board/Mr James Maboa.JPG";
import John from "../../images/board/Mr John Raphela.JPG";
import Mbasa from "../../images/board/Mr Mbasa Metuse-Organised Labour .jpg";
import Khumalo from "../../images/board/Mr Peterson  Khumalo.JPG";
import Xola from "../../images/board/Mr Xola Lingani.JPG";
import Angela from "../../images/board/Ms Angela Nyathela-Mahanjana-Organised Business .JPG";
import Nhlapo from "../../images/board/Ms Mamatshiliso Nhlapo-Government Department.JPG";
import Mopo from "../../images/board/Ms Mopo Mushwana-Organised Business.JPG";
import Pumla from "../../images/board/Ms Pumla Ngwenya-Organised Business.JPG";
import Rofhiwa from "../../images/board/Ms Rofhiwa Singo-Community Organisation.JPG";
import Thnandi from "../../images/board/Ms Thandi Masemola-Organised Labour.JPG";
import Tlakale from "../../images/board/Ms Tlakale Phatlane-Organised Labour .JPG";

const BoardMembers = () => {
  const boardMembers = [
    {
      name: "Mr Bongani Mathibela",
      position: "Organised Bussiness",
      imgSrc: Mathibela
    },
    {
      name: "Mr Blade Nzimande",
      position: "Minister",
      imgSrc: Minister
    },
    {
      name: "Mr James Maboa",
      position: "Organised Labour",
      imgSrc: James
    },
    {
      name: "Mr John Raphela",
      position: "Organised Labour",
      imgSrc: John
    },
    {
      name: "Mr Mbasa Metuse",
      position: "Organised Labour",
      imgSrc: Mbasa
    },
    {
      name: "Mr Peterson  Khumalo",
      position: "Organised Labour",
      imgSrc: Khumalo
    },
    {
      name: "Mr Xola Lingani",
      position: "Organised Labour",
      imgSrc: Xola
    },
    {
      name: "Ms Angela Nyathela-Mahanjana",
      position: "Organised Business",
      imgSrc: Angela
    },
    {
      name: "Ms Mamatshiliso Nhlapo",
      position: "Government Department",
      imgSrc: Nhlapo
    },
    {
      name: "Ms Mopo Mushwana",
      position: "Organised Business",
      imgSrc: Mopo
    },
    {
      name: "Ms Pumla Ngwenya",
      position: "Organised Business",
      imgSrc: Pumla
    },
    {
      name: "Ms Rofhiwa Singo",
      position: "Community Organisation",
      imgSrc: Rofhiwa
    },
    {
      name: "Ms Thandi Masemola",
      position: "Organised Labour",
      imgSrc: Thnandi
    },
    {
      name: "Ms Tlakale Phatlane",
      position: "Organised Labour",
      imgSrc: Tlakale
    }
  ];

  return (
    <Stack>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase", mb: 2 }}
      >
        Board Members
      </Typography>

      <Grid container spacing={2}>
        {boardMembers.map((member) => {
          return (
            <Grid item xs={12} md={4}>
              <ProfileCard
                name={member.name}
                position={member.position}
                imgSrc={member.imgSrc}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default BoardMembers;
