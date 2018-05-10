import React, { Component } from 'react'
import shitcat from './bad cat.png'
import speedy from './speedycat.png'
import watercat from './watercat.png'
import fatcat from './fatcat2.png'

export default class Landing extends Component {
    render() {
        return (
            <div>
                <img src={shitcat} className="dt  center"/>
            <div className="dt mw8 center pt0 pb5 pv5-m pv6-ns">
                <div className="db dtc-ns v-mid-ns">
                    <img src={speedy} alt="Speedycat"
                         className="w-100 mw7 w5-ns"/>
                </div>
                <div className="db dtc-ns v-mid ph2 pr0-ns pl5-ns">
                    <p className="lh-copy">
                        When you work out, so does your cat...
                    </p>
                </div>
            </div>


            <div className="dt mw8 center pt0 pb5 pv5-m pv6-ns">
                <div className="db dtc-ns v-mid ph2 pl0-ns pr5-ns">
                    <p className="lh-copy">
                        When you drink water, so does your cat...
                    </p>
                </div>
                <div className="db dtc-ns v-mid-ns">
                    <img src={watercat} alt="thirstycat"
                         className="w-100 mw7 w5-ns"/>
                </div>
            </div>

                <div className="dt mw8 center pt0 pb5 pv5-m pv6-ns">
                    <div className="db dtc-ns v-mid-ns">
                        <img src={fatcat} alt="fatcat"
                             className="w-100 mw7 w5-ns"/>
                    </div>
                    <div className="db dtc-ns v-mid ph2 pr0-ns pl5-ns">
                        <p className="lh-copy">
                            When you don’t, neither does your avatar...
                        </p>
                    </div>
                </div>

            </div>



                )
    }
}