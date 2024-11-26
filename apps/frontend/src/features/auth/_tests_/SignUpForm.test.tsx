// Tests for SignUpForm Component (Using React Testing Library)
import { render, screen } from "@testing-library/react";
import { SignUpForm } from "../components/forms/signup/SignUpForm";
import userEvent from "@testing-library/user-event";

// Test rendering the SignUpForm
it("should render all input fields", () => {
  render(<SignUpForm />);
  expect(screen.getByLabelText("メールアドレス")).toBeInTheDocument();
  expect(screen.getByLabelText("パスワード（8文字以上）")).toBeInTheDocument();
  expect(screen.getByLabelText("ニックネーム")).toBeInTheDocument();
  expect(screen.getByLabelText("年齢")).toBeInTheDocument();
});

// Test form submission
it("should submit the form with all fields filled", async () => {
  render(<SignUpForm />);
  await userEvent.type(screen.getByLabelText("メールアドレス"), "test@example.com");
  await userEvent.type(screen.getByLabelText("パスワード（8文字以上）"), "password123");
  await userEvent.type(screen.getByLabelText("ニックネーム"), "メグミ");
  await userEvent.selectOptions(screen.getByLabelText("年齢"), "26-30");

  await userEvent.click(screen.getByRole("button", { name: /登録する/i }));

  expect(screen.getByLabelText("メールアドレス")).toHaveValue("test@example.com");
  expect(screen.getByLabelText("パスワード（8文字以上）")).toHaveValue("password123");
  expect(screen.getByLabelText("ニックネーム")).toHaveValue("メグミ");
  expect(screen.getByLabelText("年齢")).toHaveValue("26-30");
});
