import ArrowRight from "@mui/icons-material/ArrowRight";
import FlexBox from "./FlexBox";
import { H2 } from "./Typography";
import { Link } from "@mui/material";
import React from "react";

const CategorySectionHeader = ({ title, seeMoreLink, icon }) => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" mb={3}>
      <FlexBox alignItems="center">
        {icon && (
          <FlexBox mr={1} alignItems="center">
            {icon}
          </FlexBox>
        )}
        <H2 fontWeight="bold" lineHeight="1">
          {title}
        </H2>
      </FlexBox>

      {seeMoreLink && (
        <Link to={seeMoreLink}>
          <FlexBox alignItems="center" ml={1} color="grey.600">
            View all
            <ArrowRight fontSize="small" color="inherit" />
          </FlexBox>
        </Link>
      )}
    </FlexBox>
  );
};

export default CategorySectionHeader;
