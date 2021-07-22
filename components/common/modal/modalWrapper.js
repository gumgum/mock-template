import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalForm,
  ModalHeader,
  ModalFooter,
  Button,
} from "gumdrops";

export default function ModalWrapper() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal
      className=""
      isOpen={isOpen}
      md="8"
      onClose={() => setIsOpen(!isOpen)}
      overlayClassName=""
      style={{}}
    >
      <ModalForm onSubmit={() => setIsOpen(!isOpen)}>
        <ModalHeader
          onClose={() => setIsOpen(!isOpen)}
          size="sm"
          title="A sample title"
        />
        <ModalBody>
          <p>Toggle the modal in the knobs section.</p>
        </ModalBody>
        <ModalFooter>
          <Button
            context="default"
            className="-m-r-2"
            onClick={() => setIsOpen(!isOpen)}
            size="sm"
            style={{}}
            type="button"
          >
            Cancel
          </Button>
          <Button
            context="primary"
            disabled={false}
            onClick={null}
            size="sm"
            type="submit"
          >
            Save Changes
          </Button>
        </ModalFooter>
      </ModalForm>
    </Modal>
  );
}
