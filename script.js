
// data about movies
var movies = [
  {
    id: 1,
    title: 'Groundhog Day',
    desc: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: 'pictures/groundhog-day-films-photo-u13.webp',
    video: 'https://www.youtube.com/watch?v=tSVeDx9fk60'
  },
  {
    id: 2,
    title: 'The Lion King',
    desc: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: 'pictures/the-lion-king-films-photo-u15.webp',
    video: 'https://www.youtube.com/watch?v=4sj1MT05lAA'
  },
  {
    id: 3,
    title: 'The Shawshank Redemption',
    desc: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: 'pictures/the-shawshank-redemption-films-photo-u1.webp',
    video: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: 4,
    title: 'The Sixth Sense',
    desc: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: 'pictures/the-sixth-sense-films-photo-u1.webp',
    video: 'https://www.youtube.com/watch?v=VG9AGf66tXM'
  }
];

// create class Movie:
var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieImage, {img: this.props.movie.img}),
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MovieTrailer, {video: this.props.movie.video})
      )
    );
  }
});

// create class MovieTitle:
var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title)
  }
});

// create class MovieDescription:
var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('p', {}, this.props.desc)
  }
});

// create class MovieImage:
var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('img', {src: this.props.img})
  }
});

// create class MovieTrailer:
var MovieTrailer = React.createClass({
  propTypes: {
    video: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('a', {href: this.props.video}, 'Triler')
  }
});

// id movies
var BoxMovies = movies.map(function(movie) {
  return React.createElement(Movie, {key: movie.id, movie: movie})
});

// gathering everything to the pile
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'The best of movies:'),
    React.createElement('ul', {}, BoxMovies)
  );

// render everything
ReactDOM.render(element, document.getElementById('app'));
