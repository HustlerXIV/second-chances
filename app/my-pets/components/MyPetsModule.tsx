"use client";

import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import Loader from "@/components/Loader";
import PetCard from "@/components/PetCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AlertDialog from "@/components/Dialog";
import { useRouter } from "next/navigation";

const MyPetsModule = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteDialog, setDeleteDialog] = useState<boolean>(false);
  const [petId, setPetId] = useState<string>();

  const router = useRouter();

  const getAllMyPets = async () => {
    try {
      const res = await axios.get("/api/pet/allMyPets");
      setData(res.data);
      setLoading(false);
    } catch (error: any) {
      console.error("Get my pets failed:", error);
      setLoading(false);
    }
  };

  const handleDeletePet = (id: string) => {
    setPetId(id);
    setDeleteDialog(true);
  };

  const deletePet = async () => {
    try {
      setLoading(true);
      await axios.delete("/api/pet/delete", {
        params: { id: petId },
      });
      setDeleteDialog(false);
      setLoading(false);
      getAllMyPets();
    } catch (error: any) {
      console.error("Get my pets failed:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMyPets();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        <div className="flex flex-wrap gap-[24px] justify-center my-[24px]">
          {data?.map((item: any) => {
            return (
              <div key={item.id} className="relative">
                <div className="absolute z-10 top-[10px] right-[10px] flex gap-[5px]">
                  <CustomButton
                    label={<DeleteIcon />}
                    design="danger"
                    onClick={() => handleDeletePet(item.id)}
                  />
                  <CustomButton
                    label={<EditIcon />}
                    design="containedYellow"
                    onClick={() => router.push(`/my-pets/edit/${item.id}`)}
                  />
                </div>
                <PetCard data={item} />;
              </div>
            );
          })}
        </div>
      </Container>
      <AlertDialog
        onClose={() => setDeleteDialog(false)}
        closeLabel="Close"
        confirmLabel="Confirm"
        title="Are you sure?"
        content="Do you want to delete this pet?"
        onConfirm={() => deletePet()}
        isOpen={deleteDialog}
      />
    </>
  );
};

export default MyPetsModule;
