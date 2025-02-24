import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import firebaseAuth from "../utils/firebase-config";
import styled from "styled-components";
import NotAvailable from "../components/NotAvailable";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SelectGenre from "../components/SelectGenre";

export default function Movies() {
    const [isScrolled, setIsScrolled] = useState(false);
    const genresLoaded = useSelector((state) => state.daveflix.genresLoaded);
    const movies = useSelector((state) => state.daveflix.movies);
    const genres = useSelector((state) => state.daveflix.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({ type: "movies" }));
    }, [genresLoaded, dispatch]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset === 0 ? false : true);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    onAuthStateChanged(firebaseAuth, (currentuser) => {
        // if (currentuser) navigate("/");
    });

    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>
            <div className="data">
                <SelectGenre genres={genres} type="movie" />
                {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
            </div>
        </Container>
    )
}

const Container = styled.div`
.data {
margin-top: 8rem;
.not-available{
text-align: centre;
color: white;
margin-top: 4rem;
}
}
`;