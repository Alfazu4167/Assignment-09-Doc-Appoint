'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, Modal, Select, Surface, TextField, ListBox, FieldError } from '@heroui/react';



import toast from 'react-hot-toast';



const AppointmentBookingModal = ({ doctor }) => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    const { name } = doctor;

    const onSubmit = async (e) => {


        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const formDataObj = Object.fromEntries(formData.entries());

        const bookingData = {
            ...formDataObj,
            userId: user?.id
        };

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });


            if (res.ok) {
                const data = await res.json();

                toast.success('Your Appointment Booked Successfully');
            } else {
                toast.error('Something went wrong on the server');
            }
        } catch (error) {
            toast.error('Network error, please try again');
        }
    }
    return (
        <div className=''>
            <Modal >
                <Button className={'bg-[#14B8A6] rounded-[10px]'}>Book Appointment</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md w-full max-h-[110vh] overflow-y-auto  flex flex-col bg-white rounded-2xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>

                                <Modal.Heading>Book Appointment</Modal.Heading>
                                <p className='text-muted text-sm'>with {name}</p>
                            </Modal.Header>
                            <Modal.Body className="p-4">
                                <Surface variant="default">
                                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>

                                        <TextField className="w-full" name="userEmail" type="email"
                                            defaultValue={user?.email}
                                            variant="secondary">
                                            <Label>Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>
                                        <TextField className="w-full" name="doctorName" type="text" variant="secondary" defaultValue={name} isReadOnly>
                                            <Label>Doctor Name</Label>
                                            <Input placeholder="" />
                                        </TextField>
                                        <TextField className="w-full" name="patientName" type="text" variant="secondary" isRequired>
                                            <Label>Patient Name</Label>
                                            <Input placeholder="Patient Full Name" />
                                        </TextField>

                                        <div className='flex gap-3'>
                                            <Select className="w-[256px]" placeholder="Select Gender" name="gender">
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
                                            <TextField className="w-full" name="phone" type="tel" variant="secondary" isRequired>
                                                <Label>Phone</Label>
                                                <Input placeholder="Enter your phone number" />
                                            </TextField>

                                        </div>
                                        <div className='flex gap-3'>
                                            <TextField name="appointDate" type="date" isRequired>
                                                <Label>Appointment Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                            <TextField name="appointTime" type="date" isRequired>
                                                <Label>Appoint Time</Label>
                                                <Input type="time" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>



                                        </div>
                                        <TextField
                                            name='reason'
                                            className="w-full" variant="secondary">
                                            <Label>Reason (optional)</Label>
                                            <Input placeholder="Reason for visit" />
                                        </TextField>
                                        <Button slot="close" type='submit' className={'w-full bg-[#14B8A6]'}>Confirm Booking</Button>
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