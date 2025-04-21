"use client"

import { useRef, useState } from "react"
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
    setQuantity((prev) => prev + 1)
    amountInputRef.current.value = (quantity + 1).toString()
  }

  const handleQuantityChange = (e) => {
    setQuantity(+e.target.value)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "2",
          step: "1",
          defaultValue: "1",
          onChange: handleQuantityChange,
          value: quantity,
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm
