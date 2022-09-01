import { useFormik } from "formik";
import axios from "axios";

function Createuser() {
    const formik = useFormik({
        initialValues: {
            username: "",
            position: "",
            office: "",
            age: "",
            startdate: "",
            salary: ""
        },

        validate: (values) => {
            let errors = {};

            if (values.name === "") {
                errors.name = "Please Enter Name";
            }

            if (values.position === "") {
                errors.position = "Please Enter position";
            }

            if (values.office === "") {
                errors.office = "Please Enter office";
            }

            if (values.age === "") {
                errors.age = "Please Enter age";
            }



            return errors;
        },

        onSubmit: async (values) => {
            console.log(values)
            let User = await axios.post("https://62ab049e371180affbdf40f1.mockapi.io/users", values)
            alert("User Created")
        }
    })
    return (
        <>
            <div className="row">
                <div className="container-fluid">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <label>User Name</label>
                                <input type={"text"} className="form-control" placeholder="Enter your name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    name="name"
                                />
                                <span style={{ color: "red" }}>{formik.errors.name}</span>
                            </div>

                            <div className="col-lg-6">
                                <label>Position</label>
                                <input type={"text"} className="form-control" placeholder="Enter your position"
                                    value={formik.values.position}
                                    onChange={formik.handleChange}
                                    name="position" />
                                <span style={{ color: "red" }}>{formik.errors.position}</span>
                            </div>

                            <div className="col-lg-6">
                                <label>Office</label>
                                <input type={"text"} className="form-control" placeholder="Enter your office name"
                                    value={formik.values.office}
                                    onChange={formik.handleChange}
                                    name="office" />
                                <span style={{ color: "red" }}>{formik.errors.age}</span>
                            </div>

                            <div className="col-lg-6">
                                <label>Age</label>
                                <input type={"number"} className="form-control" placeholder="Enter your age"
                                    value={formik.values.age}
                                    onChange={formik.handleChange}
                                    name="age" />
                            </div>

                            <div className="col-lg-6">
                                <label>Start Date</label>
                                <input type={"date"} className="form-control" placeholder="Enter your start date"
                                    value={formik.values.startdate}
                                    onChange={formik.handleChange}
                                    name="startdate" />
                            </div>

                            <div className="col-lg-6">
                                <label>Salary</label>
                                <input type={"number"} className="form-control" placeholder="Enter your Salary"
                                    value={formik.values.salary}
                                    onChange={formik.handleChange}
                                    name="salary" />
                            </div>
                            <div className="col-lg-6">
                                <input type={"submit"} className="btn btn-danger mt-2"
                                    value="submit"
                                />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Createuser;