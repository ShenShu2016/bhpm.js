import "react-image-gallery/styles/css/image-gallery.css";

import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import ImageGallery from "react-image-gallery";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { makeStyles } from "@mui/styles";

const styles = {
  productContainer: {
    "& .image-gallery-slide img": {
      borderRadius: "3px",
      maxWidth: "300px",
      height: "auto",
      display: "inline",
    },
    "& .image-gallery-swipe": {
      margin: "30px 0px",
      overflow: "hidden",
      width: "100%",
      height: "auto",
      textAlign: "center",
    },
    "& .image-gallery-thumbnails > .image-gallery-thumbnails-container a": {
      "&.active > div": {
        opacity: "1",
        borderColor: "#DDDDDD",
      },
      "& > div": {
        width: "50%",
        maxWidth: "85px",
        margin: "0 auto",
        padding: "8px",
        display: "inline",
        border: "1px solid transparent",
        background: "transparent",
        borderRadius: "3px",
        opacity: ".8",
      },
      "& > div img": {
        borderRadius: "3px",
        width: "100%",
        height: "auto",
        textAlign: "center",
      },
    },
  },
};

// const useStyles = makeStyles(styles);

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const styles2 = {
  container: {
    width: 700,
    height: 900,
    margin: "5px auto",
    backgroundColor: "orange",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    fontWeight: "bold",
    overflow: "scroll",
  },
};

const styles3 = {
  container: {
    width: 700,
    height: 100,
    margin: "5px auto",
    backgroundColor: "orange",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    overflow: "none",
  },
};

// const bid2 = () => {
//   return [
//     <div className={[styles.productContainer]}>
//       <Grid
//         item
//         xs={5}
//         sm={5}
//         Container
//         direction={"row"}
//         justifyContent={"left"}
//         alignItems={"left"}
//         rowSpacing={1}
//         columnSpacing={{ xs: 0, sm: 0, md: 0 }}
//         columns={12}
//       >
//         <Grid>
//           <ImageGallery
//             showFullscreenButton={true}
//             showPlayButton={false}
//             showIndex={true}
//             startIndex={3}
//             thumbnailPosition={"left"}
//             items={images}
//           ></ImageGallery>
//         </Grid>
//         <div>
//           <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
//             <Box gridColumn="span 8">
//               <item>xs=8</item>
//             </Box>
//             <Box gridColumn="span 4">
//               <item>xs=4</item>
//             </Box>
//             <Box gridColumn="span 4">
//               <item>xs=4</item>
//             </Box>
//             <Box gridColumn="span 8">
//               <item>xs=8</item>
//             </Box>
//           </Box>
//         </div>
//       </Grid>
//     </div>,
//   ];
// };

export default function Bidding() {
  const [showMe, setShowMe] = useState(false);
  function firstcall() {
    setShowMe(!showMe);
    var div = document.getElementById("msgbox1");
    div.innerHTML +=
      '<Button variant="outlined" color="success">Click me</Button><br />';
    var div1 = document.getElementById("msgbox1");
    div1.scrollTop = div1.scrollHeight - div1.clientHeight;
  }

  function secondcall() {
    setShowMe(!showMe);
    var div = document.getElementById("msgbox1");
    div.innerHTML += '<div style="color:blue">second call</div>';
    var div = document.getElementById("msgbox1");
    div.scrollTop = div.scrollHeight - div.clientHeight;
  }

  function thirdcall() {
    setShowMe(!showMe);
    var div = document.getElementById("msgbox1");
    div.innerHTML +=
      '<div style="color:blue">Here is some more data appended</div>';
    var div = document.getElementById("msgbox1");
    div.scrollTop = div.scrollHeight - div.clientHeight;
  }

  //   function toggle() {
  //     setShowMe(!showMe);
  //     var div = document.getElementById("msgbox1");
  //     div.innerHTML +=
  //       '<div style="color:blue">Here is some more data appended</div>';
  //     var div = document.getElementById("msgbox1");
  //     div.scrollTop = div.scrollHeight - div.clientHeight;
  //   }
  return [
    <div className={[styles.productContainer]}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <item>
            <ImageGallery
              showFullscreenButton={true}
              showPlayButton={false}
              showIndex={true}
              startIndex={3}
              thumbnailPosition={"left"}
              items={images}
            ></ImageGallery>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <div>
              <h1>Next Bid Start on March 26th, 2022 @ 6:00pm Eastern Time</h1>
            </div>
            <div id="msgbox1" style={styles2.container}>
              <h2>Live Bid</h2>
            </div>
          </item>
        </Grid>
        <Grid item xs={8}>
          <item>
            <div style={styles3.container}>
              <h1>$ 10,000 (CAD)</h1>
            </div>
            <div style={styles3.container}>
              <h1>Next Bid: $ 11,000</h1>
            </div>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <div className="App">
              <p className="App-intro">
                <div>
                  <h1 style={{ color: "blue" }}>
                    Bid Amount &nbsp;&nbsp;&nbsp;
                    <FormControl sx={{ m: 1 }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        CAD
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={"0"}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                  </h1>
                </div>
              </p>
            </div>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Bid From
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Room"
                  control={<Radio />}
                  label="Room"
                />
                <FormControlLabel
                  value="Internet"
                  control={<Radio />}
                  label="Internet"
                />
                <FormControlLabel
                  value="Phone"
                  control={<Radio />}
                  label="Phone"
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              size="large"
              color="success"
              sx={{
                width: 200,
                color: "blue",
              }}
              onClick={() => {
                firstcall();
              }}
            >
              Bid
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              size="large"
              color="success"
              sx={{
                width: 200,
                color: "blue",
              }}
              onClick={() => {
                firstcall();
              }}
            >
              First Call
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="contained"
              size="large"
              color="success"
              sx={{
                width: 200,
                color: "blue",
              }}
              onClick={() => {
                secondcall();
              }}
            >
              Second Call
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="contained"
              size="large"
              color="success"
              sx={{
                width: 200,
                color: "blue",
              }}
              onClick={() => {
                thirdcall();
              }}
            >
              Third Call
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              size="large"
              color="success"
              sx={{
                width: 200,
                color: "blue",
              }}
              onClick={() => {
                thirdcall();
              }}
            >
              Final & Next
            </Button>
            <br />
          </item>
        </Grid>
      </Grid>
    </div>,
  ];
}
