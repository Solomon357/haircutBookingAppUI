import { createContext, useState } from "react";

const FormContext = createContext({})

// "title" being placed here has the same effect as importing title from a separate file, 
// this way title doesnt re-render every time FormProvider runs
const title = {
  0: "Select Haircut Type",
  1: 'Name of Booking',
  2: 'Select Professional',
  3: 'Select Date & Time',
  4: 'Confirmation',
}

export const FormProvider = ({ children }) => {

  //TO DO FOR TOMORROW:  
  // 1. deploy the project on a server
  // (a). encrypt uri (access) for mongodb
  // (b). allow mongodb network access from a range if IP addresses ??
  // (c). deploy the servlet on a cloud platform
  // (d). deploy the ui on ideally the same cloud platform

  const [page, setPage] = useState(0)

  const [form, setForm] = useState({
    haircutType: "",
    haircutPrice: 0,
    haircutBookingName: "",
    bookingDate: "",
    bookingTime: "", 
    barberInfo: "",
    barberPrice: 0, 
    total: 0
  })

  const handleChange = e => {
    const type = e.target.type 
    
    const name = e.target.name

    let value = e.target.value

    if(type === "radio"){
      let radioValues = value.split(",");
      radioValues[2] = +radioValues[2];

      if(name === "haircutType"){ 
        form.haircutPrice = radioValues[2];
      } else if(name === "barberInfo"){
        form.barberPrice = radioValues[2];
      }
    }

    form.total = form.haircutPrice + form.barberPrice;

    setForm(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  //needed to be separated from handleChange because name is not a prop in DatePicker
  const handleDateChange = (date) => {
    let isoDate = date.toISOString()
    isoDate = isoDate.substring(0, isoDate.indexOf('T')) 
    const name = "bookingDate"
    let value = isoDate

    //then i can setForm with the same functionality as handleChange
    setForm(prevData => ({
      ...prevData,
      [name]: value
    })) 
  }

  
  //so this operation is only performed at the end of the form
  let canSubmit
  if(page === Object.keys(title).length - 1){
    const {barberPrice,
      ...requiredInputs } = form
  
    canSubmit = [...Object.values(requiredInputs)].every(Boolean)
  }

  const pageIdentifier = {
    0: 'haircutT',
    1: 'haircutB',
    2: 'barberI',
    3: 'book'
  }

  //can only move to the next page once evey value on current page has a value
  const canNextPage = Object.keys(form)
    .filter(key => key.startsWith(pageIdentifier[page]))
    .map(key => form[key])
    .every(Boolean)

  const disablePrev = page === 0
  
  //disable next based on parameters established above
  const disableNext = (page === Object.keys(title).length - 1) || !canNextPage
  
  return (
    <FormContext.Provider value={{ setForm, setPage, handleChange, handleDateChange, title, page, form, canSubmit, disablePrev, disableNext }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext