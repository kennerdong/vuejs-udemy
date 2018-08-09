import { mount } from "@vue/test-utils";
import Signup from "./signup.vue";

test("signing up an existing email", async () => {
  const wrapper = mount(Signup);
  const emailInput = wrapper.find("input#email");
  expect(emailInput.is("input")).toBe(true);

  await emailInput.setValue("test@test.com");
  expect(wrapper.vm.$v.email.$model).toBe("test@test.com");
  await wrapper.vm.$v.email.$touch();
  let promise = new Promise((resolve, reject) => {
    let poll = setInterval(() => {
      if (!wrapper.vm.$v.email.$pending) {
        clearInterval(poll);
        resolve();
        return;
      }
    }, 500);
  });
  await promise;
  expect(wrapper.vm.$v.email.$error).toBe(true);
});

test("signing up a new valid", async () => {
  const wrapper = mount(Signup);
  const emailInput = wrapper.find("input#email");
  expect(emailInput.is("input")).toBe(true);

  await emailInput.setValue("test@test.co");
  expect(wrapper.vm.$v.email.$model).toBe("test@test.co");
  await wrapper.vm.$v.email.$touch();
  let promise = new Promise((resolve, reject) => {
    let poll = setInterval(() => {
      if (!wrapper.vm.$v.email.$pending) {
        clearInterval(poll);
        resolve();
        return;
      }
    }, 500);
  });
  await promise;
  expect(wrapper.vm.$v.email.$error).toBe(false);
});

test("signing up an invalid", async () => {
  const wrapper = mount(Signup);
  const emailInput = wrapper.find("input#email");
  expect(emailInput.is("input")).toBe(true);

  await emailInput.setValue("test");
  expect(wrapper.vm.$v.email.$model).toBe("test");
  await wrapper.vm.$v.email.$touch();
  let promise = new Promise((resolve, reject) => {
    let poll = setInterval(() => {
      if (!wrapper.vm.$v.email.$pending) {
        clearInterval(poll);
        resolve();
        return;
      }
    }, 500);
  });
  await promise;
  expect(wrapper.vm.$v.email.$error).toBe(true);
});
