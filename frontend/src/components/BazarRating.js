import { compose, spacing, styled, typography } from "@mui/system";

import { Rating } from "@mui/material";
const BazarRating = styled(Rating)(compose(spacing, typography));
BazarRating.defaultProps = {
  fontSize: "1.25rem",
};
export default BazarRating;
