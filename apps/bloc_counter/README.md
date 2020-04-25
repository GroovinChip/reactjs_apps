# bloc_counter

A simple counter app that uses the BLoC pattern to handle state. I used [this article](https://medium.com/dailyjs/introducing-bloc-pattern-with-react-and-rxjs-40109665bb2) to help translate bloc from Flutter to ReactJS in my mind.

This application was created with [nano-react-app](https://github.com/adrianmcli/nano-react-app)

## Post-coding notes
- Some equivalencies to [rxdart](https://pub.dartlang.org/packages/rxdart) and Flutter I noticed:
    - Both libraries have `BehaviorSubject`, my favorite way to handle streams. That said, the definition of what a `Subject` seems to differ between JavaScript and Dart: A `Subject` in Dart is a controller for the stream, while a `Subject` in JavaScript streams and their "controllers" seem to both be of type `Observable`. [This page](https://rxjs-dev.firebaseapp.com/guide/subject) and [this page](https://rxjs-dev.firebaseapp.com/guide/observable) explain it better.
    - Flutter has a `StreamBuilder`, which takes a stream and builds UI based on the data in the stream. The `bloc-builder-react` package has a `BlocBuilder` which seems to be very similar to me.
- The article mentioned above wrote with regard to class components. Since I have been exclusively using function components, I needed to translate their code. Their code was small, so not much needed to change. All I had to do was replace the constructor with `const bloc = new CounterBloc();` before my `return` statement; his did the trick perfectly. I also did not need the `render()` function; the `return` function alone was sufficient.