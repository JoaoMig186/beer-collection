'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';
import UploadImage from '../../assets/addPhoto.svg';
import Image from 'next/image';
import { createBeer } from '../../index';
//Utils
import { BeerType, enumRatings, enumType } from "../../index";

interface BeerFormInput {
  id: string;
  name: string;
  description: string;
  type: string;
  liters: number;
  image: string;
  price: number;
  rating: number;
}

const CreateBeer: React.FC = () => {
  const [beerPhoto, setBeerPhoto] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<BeerFormInput>();
  
  const onSubmit = async (data: BeerFormInput) => {
    console.log('Nova cerveja:', data);

    try{
      const response = await createBeer(data);
      console.log('Cerveja criada com sucesso:', response);
      reset();
      setBeerPhoto(null);
    } catch(error){
      console.error('Erro ao criar cerveja:', error);
    }
  };

  const handleUploadPhoto = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const image = e.target?.result as string;
          setBeerPhoto(image);
        };
        reader.readAsDataURL(file);
      }
    };
  };

  return(
      <div className="beer-form-item">
            <div className="beer-form-item--id">
                +
            </div>
            <div className="beer-form-item--texts">
                <input type="text" {...register('name')} placeholder="Digite o nome da cerveja..." />
                <textarea rows={4} {...register('description')} placeholder="Digite a descrição da cerveja..." />
                <div className="beer-form-item--texts__info">
                    <select {...register('type')}>
                      <option value="">Selecione o tipo</option>
                      <option value="lata">Lata </option>
                      <option value="garrafa">Garrafa </option>
                    </select> <input type="number" placeholder="Litros" {...register('liters', { valueAsNumber: true })} />  <input type="number" placeholder="Preço €" {...register('price', { valueAsNumber: true })} />
                </div>   
            </div>
            <div className="beer-form-item--image-container">
                <div className="beer-form-item--image-container__image" onClick={handleUploadPhoto}>
                    <div><img src={beerPhoto || UploadImage.src} alt="upload image" /> </div>
                </div>
                
                <div className="beer-form-item--image-container__ratings">
                    <select {...register('rating')}>
                      <option value="">Avaliação</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="beer-form-item--button-create" onClick={handleSubmit(onSubmit)}>Criar cerveja</button>
        </div>
    )
};

export default CreateBeer;
