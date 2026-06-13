import { Button, Input, Label, Modal, Select, Surface, TextField, SelectItem, ListBox } from '@heroui/react';
import React from 'react';

const AppointmentBookingModal = ({ doctor }) => {
    const { name } = doctor;
    return (
        <Modal>
            <Button className={'bg-[#14B8A6] rounded-[10px]'}>Book Appointment</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Book Appointment</Modal.Heading>
                            <p className='text-muted'>with {name}</p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">

                                    <TextField className="w-full" name="email" type="email" variant="secondary">
                                        <Label>Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="doctor_name" type="text" variant="secondary" defaultValue={name} isReadOnly>
                                        <Label>Doctor Name</Label>
                                        <Input placeholder="" />
                                    </TextField>
                                    <TextField className="w-full" name="patient_name" type="text" variant="secondary" isRequired>
                                        <Label>Patient Name</Label>
                                        <Input placeholder="Patient Full Name" />
                                    </TextField>

                                    <div className='flex'>
                                       <Select className="w-[256px]" placeholder="Select Gender">
      <Label>Gender</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="male" textValue="Male">
            Male
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="female" textValue="Female">
            Female
            <ListBox.ItemIndicator />
          </ListBox.Item>
          
        </ListBox>
      </Select.Popover>
    </Select>
                                        <TextField className="w-full" name="phone" type="tel" variant="secondary">
                                            <Label>Phone</Label>
                                            <Input placeholder="Enter your phone number" />
                                        </TextField>
                                    </div>
                                    <TextField className="w-full" name="company" variant="secondary">
                                        <Label>Company</Label>
                                        <Input placeholder="Enter your company name" />
                                    </TextField>
                                    <TextField className="w-full" name="message" variant="secondary">
                                        <Label>Message</Label>
                                        <Input placeholder="Enter your message" />
                                    </TextField>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">Send Message</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AppointmentBookingModal;