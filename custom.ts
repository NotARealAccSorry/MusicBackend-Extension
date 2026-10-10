let songss: music.Playable[][] = []
let composers: string[] = []
let names: string[] = []
let tagss: string[][] = []
let lengths: number[]=[]
enum Strings {
    //block="name"
    name,
    //block="composer"
    composer
}
namespace hi {
    //% block="save $songarray with length $length name $name by $composer with tags $tags"
    //% songarray.shadow=variables_get
    //% songarray.defl="mySongArray"
    //% group=General
    //% weight=100
    export function pushSongToArray(songarray: music.Playable[], composer: string, tags: string[], name: string,length:number) {
        songss.push(songarray)
        composers.push(composer)
        names.push(name)
        tagss.push(tags)
        lengths.push(length)
    }

    //% block="play song $index"
    //% group=General
    //% weight=90
    export function playSong(index: number) {
        let songs = songss[index]
        if (!songs) return

        for (let value of songs) {
            music.play(value, music.PlaybackMode.UntilDone)
        }
    }
    //% block="get $strings at $index"
    //% group=Reporter
    //% weight=120
    export function getString(strings: Strings, index: number) {
        switch (strings) {
            case Strings.name: return names.get(index)
            case Strings.composer: return composers.get(index)
        }
    }
    //% block="get tag from $index and $index2"
    //% group=Reporter
    //% weight=120
    export function getTag(index: number, index2: number) {
        return tagss.get(index).get(index2)
    }
    //% block="get length from $index "
    //% group=Reporter
    //% weight=130
    export function getLength(index: number) {
        return lengths.get(index)
    }

}