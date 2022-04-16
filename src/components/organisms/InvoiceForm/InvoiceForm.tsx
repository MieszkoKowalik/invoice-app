import {
  SubmitHandler,
  useForm,
  Controller,
  useFieldArray,
} from "react-hook-form";
import * as yup from "yup";
import LabeledInput from "components/molecules/LabeledInput/LabeledInput";
import { Button } from "components/atoms/Button/Button";
import CustomSelect from "components/molecules/CustomSelect/CustomSelect";
import {
  FormWrapper,
  FromFieldset,
  ToFieldset,
  GridCell,
  ItemsFieldset,
  DeleteButton,
  Controls,
  StyledButton,
} from "./InvoiceForm.styles";
import { ReactComponent as DeleteIcon } from "assets/images/icon-delete.svg";
import { ErrorSpan } from "components/atoms/ErrorSpan/ErrorSpan";
import { formatDateString } from "helpers/formatDateString";
import { generateID } from "helpers/generateID";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Invoice } from "types/Invoice";

type FormInputs = Invoice & {
  shouldValidate: boolean;
};

const schema = yup
  .object({
    shouldValidate: yup.boolean(),
    senderAddress: yup.object().when("shouldValidate", {
      is: true,
      then: (schema) =>
        schema.shape({
          street: yup.string().required("Can't be empty"),
          city: yup.string().required("Can't be empty"),
          postCode: yup.string().required("Can't be empty"),
          country: yup.string().required("Can't be empty"),
        }),
    }),
    clientName: yup.string().when("shouldValidate", {
      is: true,
      then: (schema) => schema.required("Can't be empty"),
    }),
    clientEmail: yup.string().when("shouldValidate", {
      is: true,
      then: (schema) =>
        schema.email("Must be a valid email").required("Can't be empty"),
    }),

    clientAddress: yup.object().when("shouldValidate", {
      is: true,
      then: (schema) =>
        schema.shape({
          street: yup.string().required("Can't be empty"),
          city: yup.string().required("Can't be empty"),
          postCode: yup.string().required("Can't be empty"),
          country: yup.string().required("Can't be empty"),
        }),
    }),
    createdAt: yup.string().when("shouldValidate", {
      is: true,
      then: (schema) => schema.required("Can't be empty"),
    }),

    paymentTerms: yup
      .object({
        value: yup.number().when("shouldValidate", {
          is: true,
          then: (schema) => schema.required("Can't be empty"),
        }),
      })
      .required(),
    description: yup.string().when("shouldValidate", {
      is: true,
      then: (schema) => schema.required("Can't be empty"),
    }),
    items: yup.array().when("shouldValidate", {
      is: true,
      then: (schema) =>
        schema
          .of(
            yup.object({
              name: yup.string().required(" "),
              quantity: yup.number().required(" "),
              price: yup.number().required(" "),
            })
          )
          .min(1, "An item must be added"),
    }),
  })
  .required();

type InvoiceFormProps = {
  onDiscard: VoidFunction;
  onSubmit: (data: Invoice) => void;
};

const options = [
  { value: 1, label: "Net 1 day" },
  { value: 7, label: "Net 7 days" },
  { value: 14, label: "Net 14 days" },
  { value: 30, label: "Net 30 days" },
];

const InvoiceForm = ({
  onDiscard,
  onSubmit: onSubmition,
}: InvoiceFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
    clearErrors,
    setValue,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const watchItems = watch("items");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchItems[index],
    };
  });

  const createdAt = watch("createdAt");
  const paymentTerms = watch("paymentTerms", options[0]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    data.total = data.items.reduce((prev, current) => prev + +current.total, 0);
    const { shouldValidate, ...dataToSend } = data;
    onSubmition(dataToSend);
  };

  useEffect(() => {
    const createdDate = new Date(createdAt);
    const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
    const paymentTermsInMilliseconds = paymentTerms.value * MILLISECONDS_IN_DAY;

    const paymentDue = formatDateString(
      createdDate.valueOf() + paymentTermsInMilliseconds
    );
    setValue("paymentDue", paymentDue);
  }, [createdAt, paymentTerms, setValue]);

  return (
    <FormWrapper>
      <h2>New Invoice</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id")} defaultValue={generateID()} />
        <FromFieldset>
          <legend>Bill from</legend>
          <GridCell area="street">
            <LabeledInput
              {...register("senderAddress.street")}
              error={errors.senderAddress?.street?.message}
              label="Street adress"
            />
          </GridCell>
          <GridCell area="city">
            <LabeledInput
              {...register("senderAddress.city")}
              error={errors.senderAddress?.city?.message}
              label="City"
            />
          </GridCell>

          <GridCell area="post">
            <LabeledInput
              {...register("senderAddress.postCode")}
              error={errors.senderAddress?.postCode?.message}
              label="Post Code"
            />
          </GridCell>
          <GridCell area="country">
            <LabeledInput
              {...register("senderAddress.country")}
              error={errors.senderAddress?.country?.message}
              label="Country"
            />
          </GridCell>
        </FromFieldset>
        <ToFieldset>
          <legend>Bill to</legend>
          <GridCell area="name">
            <LabeledInput
              {...register("clientName")}
              error={errors.clientName?.message}
              label="Client's Name"
            />
          </GridCell>
          <GridCell area="email">
            <LabeledInput
              {...register("clientEmail")}
              error={errors.clientEmail?.message}
              label="Client's Email"
            />
          </GridCell>
          <GridCell area="street">
            <LabeledInput
              {...register("clientAddress.street")}
              error={errors.clientAddress?.street?.message}
              label="Street adress"
            />
          </GridCell>
          <GridCell area="city">
            <LabeledInput
              {...register("clientAddress.city")}
              error={errors.clientAddress?.city?.message}
              label="City"
            />
          </GridCell>

          <GridCell area="post">
            <LabeledInput
              {...register("clientAddress.postCode")}
              error={errors.clientAddress?.postCode?.message}
              label="Post Code"
            />
          </GridCell>
          <GridCell area="country">
            <LabeledInput
              {...register("clientAddress.country")}
              error={errors.clientAddress?.country?.message}
              label="Country"
            />
          </GridCell>
          <GridCell area="invoice">
            <LabeledInput
              {...register("createdAt")}
              error={errors.createdAt?.message}
              label="Invoice Date"
              type="date"
            />
          </GridCell>

          <GridCell area="payment">
            <Controller
              render={({ field }) => (
                <CustomSelect
                  {...field}
                  error={errors.paymentTerms?.value?.message}
                  isSearchable={false}
                  label="Payment Terms"
                  placeholder=""
                  options={options}
                />
              )}
              defaultValue={options[0]}
              control={control}
              name="paymentTerms"
            />
          </GridCell>

          <GridCell area="project">
            <LabeledInput
              {...register("description")}
              error={errors.description?.message}
              label="Project Description"
            />
          </GridCell>
        </ToFieldset>

        <ItemsFieldset>
          <legend>Item List</legend>
          <ul>
            {controlledFields.map((item, index) => (
              <li key={item.id}>
                <GridCell area="name">
                  <LabeledInput
                    {...register(`items.${index}.name` as const)}
                    error={errors.items?.[index]?.name?.message}
                    label="Item Name"
                  />
                </GridCell>
                <GridCell area="qty">
                  <LabeledInput
                    {...register(`items.${index}.quantity` as const, {
                      valueAsNumber: true,
                      onChange: (e) =>
                        setValue(
                          `items.${index}.total`,
                          +(e.target.value * item.price || 0).toFixed(2)
                        ),
                    })}
                    error={errors.items?.[index]?.quantity?.message}
                    label="Qty"
                    min="0"
                    type="number"
                    defaultValue={0}
                  />
                </GridCell>
                <GridCell area="price">
                  <LabeledInput
                    {...register(`items.${index}.price` as const, {
                      valueAsNumber: true,
                      onChange: (e) =>
                        setValue(
                          `items.${index}.total`,
                          +(e.target.value * item.quantity || 0).toFixed(2)
                        ),
                    })}
                    error={errors.items?.[index]?.price?.message}
                    label="Price"
                    type="number"
                    defaultValue={0}
                    min="0"
                    step="0.01"
                  />
                </GridCell>

                <GridCell area="total">
                  <LabeledInput
                    label="Total"
                    {...register(`items.${index}.total` as const, {
                      valueAsNumber: true,
                    })}
                    readOnly
                    isTransparent
                    defaultValue={0}
                  />
                </GridCell>
                <GridCell area="btn">
                  <DeleteButton
                    type="button"
                    aria-label="Delete item"
                    onClick={() => remove(index)}
                  >
                    <DeleteIcon />
                  </DeleteButton>
                </GridCell>
              </li>
            ))}
          </ul>

          <Button type="button" variant="secondary" onClick={() => append({})}>
            Add item
          </Button>
          <ErrorSpan>{(errors.items as any)?.message}</ErrorSpan>
        </ItemsFieldset>
        <Controls>
          <StyledButton type="button" variant="bordered" onClick={onDiscard}>
            Discard
          </StyledButton>
          <Button
            variant="secondary"
            onClick={() => {
              clearErrors("items");
              setValue("status", "draft");
              setValue("shouldValidate", false);
            }}
          >
            save as draft
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setValue("shouldValidate", true);
              setValue("status", "pending");
            }}
          >
            save & send
          </Button>
        </Controls>
      </form>
    </FormWrapper>
  );
};

export default InvoiceForm;
