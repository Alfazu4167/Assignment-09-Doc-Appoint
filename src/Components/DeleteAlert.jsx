"use client";

import { AlertDialog, Button } from "@heroui/react";

export function DeleteAlert({ booking }) {
    const { doctorName, _id } = booking;
    const handleDelete = async (id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/bookings/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();
        console.log(data);
        // window.location.reload()
    }
    return (
        <AlertDialog>
            <Button variant="danger" className={'rounded-[10px]'}>Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete This Appointment permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{doctorName}</strong>'s appointment and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" onClick={() => handleDelete(_id)}>
                                Confirm Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}