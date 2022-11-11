import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import img from "../../assets/img.svg";
import { API } from "../../config/api";

const AddFilm = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    filmUrl: "",
  });

  const getCategory = async () => {
    try {
      const response = await API.get("/categorys");
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCategoryId = (e) => {
    const id = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      // Save category id if checked
      setCategoryId([...categoryId, parseInt(id)]);
    } else {
      // Delete category id from variable if unchecked
      let newCategoryId = categoryId.filter((categoryIdItem) => {
        return categoryIdItem != id;
      });
      setCategoryId(newCategoryId);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("description", form.description);
      formData.set("price", form.price);
      formData.set("image", form.image[0], form.image[0].name);
      formData.set("filmUrl", form.filmUrl);

      const data = await API.post("/film/create", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      navigate("/add-film");
      console.log("data film", data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Container>
      <h1 className="text-light my-3">Add Film</h1>
      <Form onSubmit={(e) => handleSubmit.mutate(e)}>
        <Row>
          <Col className="col-12 col-md-9">
            <input
              label="Title"
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              className="p-2 w-100 rounded rounded-3 my-2 border-1 shadow-lg bg-dark text-light"
            />
          </Col>
          <Col className="col-12 col-md-3">
            {preview && (
              <div>
                <img
                  src={preview}
                  style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                  alt={preview}
                />
              </div>
            )}
            <Form.Group
              className="mb-3 p-1 mt-1 rounded border border-form border-dark border-grey3 bg-dark"
              controlId="formBasicEmail"
            >
              <Form.Control
                name="image"
                type="file"
                placeholder="Attach Image"
                hidden
                onChange={handleChange}
              />
              <Form.Label className="d-flex justify-content-between btn-full align-items-center bg-dark mt-1">
                <div className="text-grey3 text-light bg-dark">
                  Attach Image{" "}
                </div>
                <div className="">
                  <img src={img} alt="" className="bg-dark" />
                </div>
              </Form.Label>
            </Form.Group>
          </Col>
        </Row>
        <div className="card-form-input mt-4 px-2 py-1 pb-2">
          <div className="text-secondary mb-1" style={{ fontSize: "15px" }}>
            Category
          </div>
          {categories?.map((item, index) => (
            <label className="checkbox-inline me-4" key={index}>
              <input
                type="checkbox"
                value={item?.id}
                onClick={handleChangeCategoryId}
              />{" "}
              {item?.name}
            </label>
          ))}
        </div>

        <input
          label="Price"
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="p-2 w-100 rounded rounded-3 my-2 border-1 shadow-lg bg-dark text-light"
        />
        <input
          label="filmUrl"
          type="text"
          name="filmUrl"
          placeholder="link film"
          onChange={handleChange}
          className="p-2 w-100 rounded rounded-3 my-2 border-1 shadow-lg bg-dark text-light"
        />
        <textarea
          label="description"
          name="description"
          onChange={handleChange}
          placeholder="Description"
          className="p-2 w-100 rounded rounded-3 my-2 border-1 shadow-lg bg-dark text-light"
        ></textarea>
        <div className="d-flex justify-content-end">
          <Button className="btn-color w-25 mt-5 " type="submit">
            Add Film
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddFilm;
