import { Box, Container, Grid } from "@mui/material";
import { H1, H2, H6 } from "../../components/Typography";
import React, { useCallback, useState } from "react";

import BazarAvatar from "../../components/BazarAvatar";
import FlexBox from "../FlexBox";
import ImageViewer from "react-simple-image-viewer";

const ProductIntro = ({ product }) => {
  const { title } = product;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageClick = (ind) => () => {
    setSelectedImage(ind);
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Container
      sx={{
        my: "2rem",
      }}
    >
      <Box width="100%">
        <Grid container spacing={3} justifyContent="space-around">
          <Grid item md={6} xs={12} alignItems="center">
            <Box>
              <FlexBox justifyContent="center" mb={6}>
                <img
                  src={product.auctionItem.imgUrls[selectedImage]}
                  onClick={() =>
                    openImageViewer(
                      product.auctionItem.imgUrls.indexOf(
                        product.auctionItem.imgUrls[selectedImage]
                      )
                    )
                  }
                  alt={title}
                  height={300}
                  width={300}
                  loading="eager"
                  objectfit="contain"
                />
                {isViewerOpen && (
                  <ImageViewer
                    src={product.auctionItem.imgUrls}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    backgroundStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                  />
                )}
              </FlexBox>
              <FlexBox overflow="auto">
                {product.auctionItem.imgUrls.map((url, ind) => (
                  <Box
                    height={64}
                    width={64}
                    minWidth={64}
                    bgcolor="white"
                    borderRadius="10px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border="1px solid"
                    style={{
                      cursor: "pointer",
                    }}
                    ml={ind === 0 ? "auto" : 0}
                    mr={
                      ind === product.auctionItem.imgUrls.length - 1
                        ? "auto"
                        : "10px"
                    }
                    borderColor={
                      selectedImage === ind ? "primary.main" : "grey.400"
                    }
                    onClick={handleImageClick(ind)}
                    key={ind}
                  >
                    <BazarAvatar src={url} variant="square" height={40} />
                  </Box>
                ))}
              </FlexBox>
            </Box>
          </Grid>

          <Grid item md={6} xs={12} alignItems="center">
            <H1 mb={2}>{title}</H1>

            <FlexBox alignItems="center" mb={2}>
              <Box>Description:</Box>
              <H6 ml={1}>{product.auctionItem.description}</H6>
            </FlexBox>

            <FlexBox alignItems="center" mb={2}></FlexBox>

            <Box mb={3}>
              <H2 color="primary.main" mb={0.5} lineHeight="1">
                Estimated Price: ${product.estimatedPriceMax.toFixed(2)}
              </H2>
            </Box>

            <FlexBox alignItems="center" mb={2}></FlexBox>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductIntro;
