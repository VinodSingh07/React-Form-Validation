import React from "react";
import Header from "./components/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "./components/FormsUI/Textfield";
import Select from "./components/FormsUI/Select";
import DateTimePicker from "./components/FormsUI/DataTimePicker";
import Checkbox from "./components/FormsUI/Checkbox";
import Button from "./components/FormsUI/Button";
import countries from "./data/countries.json";
import religion from "./data/religion.json";
import Marital_Status from "./data/Marital.json";
import bloodGroup from "./data/bloodGroup.json";
import states from "./data/states.json";
import city from "./data/city.json";
import sex from "./data/sex.json";
import idType from "./data/idType.json";
import label from "./data/label.json";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  Name: "",
  dob: "",
  sex: "",
  id: "",
  govt_id: "",
  label: "",
  email: "",
  phone: "",
  guardian_name: "",
  addres: "",
  city: "",
  states: "",
  country: "",
  pincode: "",
  occupation: "",
  religion: "",
  marital_status: "",
  blood_Group: "",
  nationality: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  Name: Yup.string().required("Required"),
  dob: Yup.date().required("Required"),
  sex: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email."),
  phone: Yup.number().integer().typeError("Please enter a valid phone number"),
  address: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  country: Yup.string(),
  religion: Yup.string(),
  pincode: Yup.string(),
  nationality: Yup.string(),
  occupation: Yup.string(),
  marital_status: Yup.string(),
  blood_Group: Yup.string(),
  label: Yup.string(),
  id: Yup.string(),
  govt_id: Yup.string(),
  guardian_name: Yup.string(),

  departureDate: Yup.date(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Personal Details</Typography>
                  </Grid>

                  <Grid item xs={5}>
                    <Textfield name="Name" label="Enter Name" />
                  </Grid>
                  <Grid item xs={5}>
                    <DateTimePicker name="dob" label="Date of birth" />
                  </Grid>

                  <Grid item xs={2}>
                    <Select name="sex" label="sex" options={sex} />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield name="phone" label="Enter Mobile" />
                  </Grid>

                  <Grid item xs={3}>
                    <Select name="id" label="ID Type" options={idType} />
                  </Grid>
                  <Grid item xs={5}>
                    <Textfield name="govt_id" label="Enter Govt ID" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Contact Details</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Select name="label" label="Enter Label" options={label} />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield
                      name="guardian_name"
                      label="Enter Guardian Name"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Textfield name="email" label="Enter Email" />
                  </Grid>
                  <Grid item xs={3}>
                    <Textfield name="phone" label="Enter Emergency No" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Address Details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="address" label="Enter Address" />
                  </Grid>
                  <Grid item xs={3}>
                    <Select
                      name="states"
                      label="Enter States"
                      options={states}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Select
                      name="city"
                      label="Enter City/town/village"
                      options={city}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Textfield
                      name="pincode"
                      label="Enter Pincode"
                      type="number"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Other Details</Typography>
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield name="occupation" label="Enter Occupation" />
                  </Grid>
                  <Grid item xs={3}>
                    <Select
                      name="religion"
                      label="Enter Religion"
                      options={religion}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Select
                      name="marital_status"
                      label="Enter Marital Status"
                      options={Marital_Status}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Select
                      name="blood_Group"
                      label="Blood Group"
                      options={bloodGroup}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Select
                      name="nationality"
                      label="Nationality"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="I agree"
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Button>Submit Form</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
