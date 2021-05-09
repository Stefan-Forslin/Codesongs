import React, {useState} from 'react';
import './App.css';
interface song {
	id: number,
	artist: string,
	title: string,
	spotifyUrl?: string
}
function App() {
	const musicanList: song[] = [
		{id: 1, artist: 'Pink Floyd', title: 'Time', spotifyUrl: 'example'},
        {id: 2, artist: 'Black Sabbath', title: 'War Pigs'},
		{id: 3, artist: 'The Doors', title: 'When the musics over'},
		{id: 4, artist: 'Shania Twain', title: 'Forever and foralways'},
		{id: 5, artist: 'Prince', title: 'Purple Rain'},
		{id: 6, artist: 'Dree Low', title: 'Dag Hammarskjöld'},
		{id: 7, artist: 'Megadeth', title: 'Holy Wars the punishment due'},
		{id: 8, artist: 'Rage Against The Machine', title: 'Wake Up'},
		{id: 9, artist: '2pac', title: 'Changes'},
		{id: 10, artist: 'Jimi Hendrix', title: 'Voodoo Child'},
		{id: 11, artist: 'Leona Lewis', title: 'Bleeding Love'},
		{id: 12, artist: 'George Gershwin', title: 'Summertime'}
	]
	const [selectedId, setSelectedId] = useState(-1)
	let selectedSong = musicanList.find(song => song.id === selectedId)
	let selectedMessage = 'No song selected.'
	if (selectedSong) {
		selectedMessage = 'You selected ' + selectedSong.title + '.'
		}

	const renderList = musicanList.map(song => (
		<li key = {song.id}
		onClick={() => setSelectedId(song.id)}
		className={song.id === selectedId ? 'selected' : ''}>
		{song.title} - {song.artist}
		</li>
	))
  return (
    <main className="App">
	    <h1>Pigs</h1>
        <ul className="song-list">
		{renderList}
		</ul>
		<p> {selectedMessage}</p>
	</main>
  );
}
export default App;
