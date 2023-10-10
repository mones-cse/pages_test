"use client";
import { useForm, FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import sendEmail from "@/actions/sendEmail";
import toast from "react-hot-toast";
interface CustomErrorMessageProps {
  errors: FieldErrors;
  name: string;
}
const CustomErrorMessage: React.FC<CustomErrorMessageProps> = ({
  errors,
  name,
}) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) => {
        console.log("messages", messages);
        return messages
          ? Object.entries(messages).map(([type, message]) => (
              <p key={type} className="text-red-500">
                {message}
              </p>
            ))
          : null;
      }}
    />
  );
};
const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      email: "",
      message: "",
    },
  });

  return (
    <div className="max-w-[50rem] px-4" id="contact">
      <p className="text-3xl font-medium text-center mb-4">Contact Me</p>
      <p className="mb-8">
        Please contact me directly at{" "}
        <a href="mailto:mones.cse@gmail.com">mones.cse@gmail.com</a> or through
        this form.
      </p>
      <form
        className="flex flex-col gap-4 mb-20"
        onSubmit={handleSubmit(async ({ email, message }) => {
          console.log({ email, message });
          const { data, error } = await sendEmail(email, message);
          if (error) {
            toast.error("error sending email");
            return;
          }

          toast.success("Email sent successfully!");
        })}
      >
        <input
          className="h-14 p-2 border border-black/10 rounded-lg"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Your email"
        />
        {/* {errors.email?.message && <p>{errors.email?.message}</p>} */}
        <CustomErrorMessage errors={errors} name="email" />
        <textarea
          className="h-40 p-2 border border-black/10 rounded-lg"
          placeholder="Your message"
          {...register("message", {
            required: {
              value: true,
              message: "Message is required",
            },
            minLength: {
              value: 2,
              message: "Message must be at least 2 characters",
            },
            maxLength: {
              value: 300,
              message: "Message must be at max 300 characters",
            },
            pattern: {
              value: /^(?=.*[^\d]).+$/i,
              message: "Message must not contain only numbers",
            },
          })}
        />

        <CustomErrorMessage errors={errors} name="message" />
        <button
          type="submit"
          className="bg-black hover:sclae-105 transform transition-all duration-200 text-center
           text-white font-bold py-2 px-4 rounded-full w-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactMe;
