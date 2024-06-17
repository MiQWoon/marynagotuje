import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  /* Mobile styles */
  @media (max-width: 600px) {
    flex-direction: column; /* stack elements vertically on mobile */
    padding: 16px;
    margin: 8px;
    width: 100%; /* full width on mobile */
  }
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={5}
      padding={{ xs: 0, md: 3, lg: 5 }}
    >
      {recipes.map((recipe) => (
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <CardMedia
              sx={{ height: 140 }}
              image={recipe.recipe.image}
              title="green iguana"
            />
            <CardContent sx={{ pt: 2 }}>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              {recipe.recipe.ingredientLines.map((ingredientLine) => (
                <Typography gutterBottom variant="body2" component="div">
                  {ingredientLine}
                </Typography>
              ))}
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};