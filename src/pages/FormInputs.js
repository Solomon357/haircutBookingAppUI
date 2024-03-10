import useFormContext from "../customhooks/useFormContext";
import HaircutType from "./HaircutType";
import HaircutName from "./HaircutName";
import HaircutBarber from "./HaircutBarber";
import HaircutDatetime from "./HaircutDatetime";
import HaircutConfirm from "./HaircutConfirm";

const FormInputs = () => {
  const { page } = useFormContext();

  const display = {
    0: <HaircutType />,
    1: <HaircutName />,
    2: <HaircutBarber />,
    3: <HaircutDatetime />,
    4: <HaircutConfirm />
  }

  return display[page];
}
 
export default FormInputs;