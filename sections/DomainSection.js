import { Grid } from "@material-ui/core";
import DomainListItem from "../components/DomainListItem";
import domainData from "../data/domainData";

export default function DomainSection() {
  return (
    <Grid container justify="center" spacing={3}>
      {domainData.map((_domainData, index) => (
        <Grid item key={`domain-item-${index}`}>
          <DomainListItem {..._domainData} />
        </Grid>
      ))}
    </Grid>
  );
}
