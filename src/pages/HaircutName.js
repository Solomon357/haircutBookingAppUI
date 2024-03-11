import useFormContext from "../customhooks/useFormContext";
import { NameField } from "./customstyles/CustomField.styles";

const HaircutName = () => {
  const { form, handleChange } = useFormContext();

  //console.log(form.haircutBookingName)

  return (
    <NameField
      type="string"
      sx={{ width: "50%", margin: "2%" }}
      helperText="Please enter first name"
      id="haircutBookingName"
      name="haircutBookingName"
      label="Booking Name"
      variant="outlined"
      onChange={handleChange}
      value={form.haircutBookingName}
    />    
  );
}
 
export default HaircutName;