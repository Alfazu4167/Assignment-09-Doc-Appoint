'use client'

import { Button, Input, Label, Modal, Select, Surface, TextField, SelectItem, ListBox, DateField, Description, TimeField } from '@heroui/react';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';

const AppointmentBookingModal = ({ doctor }) => {
    const { name } = doctor;
    return (
        <div className=''>
            <Modal >
                <Button className={'bg-[#14B8A6] rounded-[10px]'}>Book Appointment</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md w-full max-h-[90vh] overflow-y-auto flex flex-col bg-white rounded-2xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>

                                <Modal.Heading>Book Appointment</Modal.Heading>
                                <p className='text-muted text-sm'>with {name}</p>
                            </Modal.Header>
                            <Modal.Body className="p-4">
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

                                        <div className='flex gap-3'>
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
                                        <div className='flex gap-3'>
                                            <DateField className="w-[256px]" name="appointment-date">
                                                <Label>Appointment date</Label>
                                                <DateField.Group>
                                                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                                </DateField.Group>

                                            </DateField>
                                            <TimeField className="w-[256px]" name="time">
                                                <Label>Time</Label>
                                                <TimeField.Group>
                                                    <TimeField.Prefix>
                                                        <CgLock className="size-4 text-muted" />
                                                    </TimeField.Prefix>
                                                    <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                                                    <TimeField.Suffix>
                                                        <BiChevronDown className="size-4 text-muted" />
                                                    </TimeField.Suffix>
                                                </TimeField.Group>

                                            </TimeField>
                                        </div>
                                        <TextField className="w-full" name="message" variant="secondary">
                                            <Label>Reason (optional)</Label>
                                            <Input placeholder="Reason for visit" />
                                        </TextField>
                                        <Button slot="close" className={'w-full'}>Confirm Booking</Button>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default AppointmentBookingModal;