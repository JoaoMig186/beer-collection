'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';
import UploadImage from '../../assets/addPhoto.svg';
import Image from 'next/image';

interface BeerFormInput {
  name: string;
  description: string;
  type: string;
  liters: number;
  image: string;
  price: number;
  rating: number;
}

const CreateBeer: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<BeerFormInput>();

  const onSubmit = async (data: BeerFormInput) => {
    console.log('Nova cerveja:', data);

    const response = await fetch('/api/beers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Cerveja criada com sucesso!');
      reset();
    } else {
      alert('Erro ao criar cerveja!');
    }
  };

  const NewView = () => {
    return(
      <div className="beer-form-item">
            <div className="beer-form-item--id">
                +
            </div>
            <div className="beer-form-item--texts">
                <input type="text" {...register('name')} placeholder="Digite o nome da cerveja..." />
                <input type="text" {...register('description')} placeholder="Digite a descrição da cerveja..." />
                <div className="beer-form-item--texts__info">
                    <input type="text" {...register('type')} placeholder="Tipo da cerveja" /> | <input type="number" {...register('liters', { valueAsNumber: true })} />L | <input type="number" {...register('price', { valueAsNumber: true })} />€
                </div>   
            </div>
            <div className="beer-form-item--image-container">
                <div className="beer-form-item--image-container__image">
                    <div><Image src={UploadImage} alt="upload image" /> </div>
                </div>
                
                <div className="beer-form-item--image-container__ratings">
                    <span className="beer-form-item--image-container__ratings--title">Avaliação: </span>
                    <input type="number" {...register('rating', { valueAsNumber: true })} />
                </div>
            </div>
        </div>
    )
  }

  return (
    <NewView />
  );
};

export default CreateBeer;
