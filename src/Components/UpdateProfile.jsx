import { authClient } from '@/lib/auth-client';

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';


const UpdateProfile = ({ user }) => {
    const { name, image } = user;


    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        const { name, image } = user;
        await authClient.updateUser({
            name,
            image
        })
        toast.success("Account Updated Successfully")

    }
    return (
        <Modal>
            <Button className={'bg-[#14B8A6] rounded-[10px]'}><FiEdit /> Update Profile</Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Your Profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                    <TextField className="w-full" name="name" type="text" variant="secondary"
                                        defaultValue={name}>
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>

                                    <TextField className="w-full" name="image" type="url" variant="secondary"
                                        defaultValue={image}>
                                        <Label>Image Url</Label>
                                        <Input placeholder="" />
                                    </TextField>
                                    <Button slot="close" variant="secondary" type='submit'>
                                        Update
                                    </Button>
                                </form>
                            </Surface>
                        </Modal.Body>




                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateProfile;