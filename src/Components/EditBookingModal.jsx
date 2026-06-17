'use client'
import { Button, FieldError, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FiEdit } from 'react-icons/fi';

const EditBookingModal = ({ booking }) => {

    const { _id, appointTime, doctorName, patientName, appointDate, reason } = booking;


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedData = Object.fromEntries(formData.entries());

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        const data = await res.json();
        if (data.modifiedCount > 0) {
            toast.success('Appointment Updated Successfully')
            redirect('/dashboard')
        }
    };


    return (
        <div>
            <Modal>
                <Button className={'bg-[#14B8A6] rounded-[10px]'}><FiEdit /> Update</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md w-full max-h-[110vh] overflow-y-auto flex flex-col bg-white rounded-2xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading className='text-xl font-bold text-[#14B8A6]'>
                                    <FiEdit /> Update Appointment
                                </Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-4">
                                <Surface variant="default">

                                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                        <TextField className="w-full" name="doctorName" type="text" variant="secondary" defaultValue={doctorName} isDisabled>
                                            <Label>Doctor Name</Label>
                                            <Input placeholder="" />
                                        </TextField>

                                        <TextField className="w-full" name="patientName" type="text" variant="secondary" defaultValue={patientName}>
                                            <Label>Patient Name</Label>
                                            <Input placeholder="Patient Full Name" />
                                        </TextField>

                                        <div className='flex gap-3'>
                                            <TextField name="appointDate" type="date" defaultValue={appointDate}>
                                                <Label>Appointment Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                            <TextField name="appointTime" type="time" defaultValue={appointTime}>
                                                <Label>Appoint Time</Label>
                                                <Input type="time" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <TextField name='reason' className="w-full" variant="secondary" defaultValue={reason}>
                                            <Label>Reason (optional)</Label>
                                            <Input placeholder="Reason for visit" />
                                        </TextField>

                                        <Button slot="close" type='submit' className={'w-full bg-[#14B8A6] rounded-[10px]'}>Update</Button>
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

export default EditBookingModal;
