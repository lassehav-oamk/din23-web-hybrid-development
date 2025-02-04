import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect }from 'react'

interface TimerProps {
    runTimeSec: number,
    color: string
}

const Timer = ({ runTimeSec, color}: TimerProps) => {

    const [timerValue, setTimerValue] = React.useState<number>(runTimeSec);
    const [timerColor, setTimerColor] = React.useState<string>(color);


    useEffect(() => {

        function backgroundFlasher() {
            const backgrountInterval = setInterval(() => {
                setTimerColor((prev) => {
                    return prev === "red" ? "white" : "red";
                });
            }, 100);

        }

        const interval = setInterval(() => {
            setTimerValue((prev) => {
                if (prev === 0) {
                    clearInterval(interval);

                    setTimerColor("red");
                    backgroundFlasher();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={ {...styles.container, backgroundColor: timerColor} }>
            <Text style={ styles.text }>{ timerValue }</Text>
        </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',        
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }

})