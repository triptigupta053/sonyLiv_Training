import { mount } from "enzyme";
import App from "./App";
import axios from "axios";
import { act } from "react-dom/test-utils";
import mockData from "./Components/mockData.json";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import config from './Components/config';


jest.mock("axios");


describe("Load data from api test",() => {
  const data = mockData;
  let wrapper;

  // clear all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Component Renders without fail", () => {
    render(
      <BrowserRouter>
      <App />
    </BrowserRouter>
    );
  });

  test("Load data from API", async () => {
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(data));
      wrapper = mount(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });

    wrapper.update();

    await expect(axios.get).toHaveBeenCalledWith(
      config.baseUrl + config.endPoints.todos
    );
    await expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("API failed case", async () => {
    await act(async () => {
      axios.get.mockImplementationOnce(() =>Promise.reject(new Error("ERROR"))
      );
      wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      );
    });

    wrapper.update();

    await expect(axios.get).toHaveBeenCalledWith(
      config.baseUrl + config.endPoints.todos
    );
  });

})