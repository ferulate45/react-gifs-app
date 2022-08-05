import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)){
            return;
        }

        const newArr = [newCategory, ...categories];
        setCategories(newArr);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map(x=> (<GifGrid key={x} category={x}/>))
            }

        </>
    )
}
