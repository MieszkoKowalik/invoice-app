import {
  SubmitHandler,
  useForm,
  Controller,
  useFieldArray,
} from "react-hook-form";
import * as yup from "yup";
import LabeledInput from "components/molecules/LabeledInput/LabeledInput";
import useResolver from "hooks/useResolver";
import { Button } from "components/atoms/Button/Button";
import CustomSelect from "components/molecules/CustomSelect/CustomSelect";
import {
  FormWrapper,
  FromFieldset,
  ToFieldset,
  GridCell,
  ItemsFieldset,
  DeleteButton,
  Total,
  Controls,
  StyledButton,
} from "./InvoiceForm.styles";
import { ReactComponent as DeleteIcon } from "assets/images/icon-delete.svg";
import { ErrorSpan } from "components/atoms/ErrorSpan/ErrorSpan";
interface FormInputs {
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientName: string;
  clientEmail: string;
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  createdAt: string;
  paymentTerms: number;
  description: string;
  items: { name: string; qty: number; price: number }[];
}

const schema = yup
  .object({
    senderAddress: yup.object({
      street: yup.string().required("Can't be empty"),
      city: yup.string().required("Can't be empty"),
      postCode: yup.string().required("Can't be empty"),
      country: yup.string().required("Can't be empty"),
    }),
    clientName: yup.string().required("Can't be empty"),
    clientEmail: yup
      .string()
      .email("Must be a valid email")
      .required("Can't be empty"),
    clientAddress: yup.object({
      street: yup.string().required("Can't be empty"),
      city: yup.string().required("Can't be empty"),
      postCode: yup.string().required("Can't be empty"),
      country: yup.string().required("Can't be empty"),
    }),
    createdAt: yup.string().required("Can't be empty"),
    paymentTerms: yup.object().required("Can't be empty"),
    description: yup.string().required("Can't be empty"),
    items: yup
      .array(
        yup.object({
          name: yup.string().required(" "),
          qty: yup.string().required(" "),
          price: yup.string().required(" "),
        })
      )
      .min(1, "An item must be added"),
  })
  .required();

interface Props {
  closeModal: VoidFunction;
}

const options = [
  { value: 1, label: "Net 1 day" },
  { value: 7, label: "Net 7 days" },
  { value: 14, label: "Net 14 days" },
  { value: 30, label: "Net 30 days" },
];

const InvoiceForm = ({ closeModal }: Props) => {
  const { resolver, validateHandler } = useResolver(schema);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
    clearErrors,
  } = useForm<FormInputs>({
    resolver: resolver,
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

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper>
      <h2>New Invoice</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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
              min={new Date().toLocaleDateString("en-ca")}
            />
          </GridCell>

          <GridCell area="payment">
            <Controller
              render={({ field }) => (
                <CustomSelect
                  {...field}
                  error={errors.paymentTerms?.message}
                  isSearchable={false}
                  label="Payment Terms"
                  placeholder=""
                  options={options}
                />
              )}
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
                    {...register(`items.${index}.name`)}
                    error={errors.items?.[index]?.name?.message}
                    label="Item Name"
                  />
                </GridCell>
                <GridCell area="qty">
                  <LabeledInput
                    {...register(`items.${index}.qty`)}
                    error={errors.items?.[index]?.qty?.message}
                    label="Qty"
                    min="0"
                    type="number"
                  />
                </GridCell>
                <GridCell area="price">
                  <LabeledInput
                    {...register(`items.${index}.price`)}
                    error={errors.items?.[index]?.price?.message}
                    label="Price"
                    type="number"
                    min="0"
                    step="0.01"
                  />
                </GridCell>
                <GridCell area="total">
                  <Total>
                    <span>Total</span>
                    <div>{(item.price * item.qty || 0).toFixed(2)}</div>
                  </Total>
                </GridCell>
                <GridCell area="btn">
                  <DeleteButton type="button" onClick={() => remove(index)}>
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
          <StyledButton type="button" variant="bordered" onClick={closeModal}>
            Discard
          </StyledButton>
          <Button
            variant="secondary"
            onClick={() => {
              clearErrors("items");
              validateHandler(false);
            }}
          >
            save as draft
          </Button>
          <Button variant="primary" onClick={() => validateHandler(true)}>
            save & send
          </Button>
        </Controls>
      </form>
    </FormWrapper>
  );
};

export default InvoiceForm;
