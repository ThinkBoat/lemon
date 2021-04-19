import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Input, Text, Image, Picker, Form } from "@tarojs/components"
import IconFont from '../../components/iconfont';

import './index.scss'

const Index = () => {
    const [search, setSearch] = useState<{ focus: boolean, content: string }>({ focus: false, content: '' })

    return (
        <View className="page">
            <View className={`weui-search-bar ${search.focus ? 'weui-search-bar_focusing' : ''}`} id="searchBar">
                <Form className="weui-search-bar__form">
                    <View className="weui-search-bar__box">
                        <View className="weui-icon-search"></View>
                        <Input type="text"
                            className="weui-search-bar__input"
                            placeholder="搜索"
                            value={search.content}
                            focus={search.focus}
                            onInput={(e) => { setSearch({ ...search, content: e.detail.value }) }}
                            onConfirm={(e) => { console.log(e.detail.value) }}
                        />
                        {search.content.length > 0 ? <View className="weui-icon-clear" onClick={() => { setSearch({ ...search, content: '' }) }}></View> : null}
                    </View>
                    <View className="weui-search-bar__label" onClick={() => { setSearch({ ...search, focus: true }) }}>
                        <View className="weui-icon-search"></View>
                    </View>
                </Form>
                <View className="weui-search-bar__cancel-btn" onClick={() => { setSearch({ ...search, focus: false }) }}>取消</View>
            </View>
            <View className="weui-panel">
                <View className="weui-panel__hd">文字列表附来源</View>
                <View className="weui-panel__bd">
                    <View className="weui-media-box weui-media-box_text">
                        <View className="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</View>
                        <View className="weui-media-box__info">
                            <View className="weui-media-box__info__meta">文字来源</View>
                            <View className="weui-media-box__info__meta">时间</View>
                            <View className="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="weui-panel">
                <View className="weui-panel__hd">文字列表附来源</View>
                <View className="weui-panel__bd">
                    <View className="weui-media-box weui-media-box_text">
                        <View className="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</View>
                        <View className="weui-media-box__info">
                            <View className="weui-media-box__info__meta">文字来源</View>
                            <View className="weui-media-box__info__meta">时间</View>
                            <View className="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="weui-panel">
                <View className="weui-panel__hd">文字列表附来源</View>
                <View className="weui-panel__bd">
                    <View className="weui-media-box weui-media-box_text">
                        <View className="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</View>
                        <View className="weui-media-box__info">
                            <View className="weui-media-box__info__meta">文字来源</View>
                            <View className="weui-media-box__info__meta">时间</View>
                            <View className="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</View>
                        </View>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Index