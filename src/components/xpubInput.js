import React, { useMemo } from "react"
import { Alert, Form } from "react-bootstrap"
import { validateExtendedPublicKey } from "unchained-bitcoin"

const XPubInput = ({ xpub, network, changeHandler }) => {
  const isValidXpub = useMemo(
    () => validateExtendedPublicKey(xpub, network) === "",
    [xpub, network]
  )

  const isEmptyXpub = xpub === ""
  const isFilled = !isEmptyXpub

  return (
    <Form noValidate>
      <Form.Group>
        <Form.Control
          isValid={isFilled && isValidXpub}
          isInvalid={isFilled && !isValidXpub}
          size="lg"
          type="password"
          placeholder="xpub..."
          value={xpub}
          onChange={changeHandler}
        />
      </Form.Group>
      {isFilled && !isValidXpub && (
        <Alert variant="warning">Invalid xPub</Alert>
      )}
    </Form>
  )
}

export default XPubInput
