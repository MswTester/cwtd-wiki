'use client'

import { useEffect, useState } from "react";
import TowerData from "./data";
import tl from "../data/lang";

const typeData:{[key:string]:string[]} = {
    'attack_type': ['projectile', 'melee', 'summon', 'summon_proj', 'buff', 'debuff'],
    'world': ['newlandia', 'noblewood', 'hopetown', 'woodland', 'fallburg', 'soulburg', 'swampland', 'ironhold', 'purplix', 'crab_island', 'moon_station', 'event'],
    'from': ['default', 'merchant', 'witch_parkour', 'hidden_parkour', 'parkour', 'hidden_map', 'community_quest'],
    'element': ['fire', 'grass', 'water']
}

export default function Home() {
    const [activated, setActivated] = useState<number>(-1)
    const [level, setLevel] = useState<number>(0)
    const [search, setSearch] = useState<string>('')
    const [onFilter, setOnFilter] = useState<boolean>(false)
    const [filter, setFilter] = useState<string[]>([])
    const [sort, setSort] = useState<string>('sort')
    const [filterInput, setFilterInput] = useState<{[key:string]:string}>({
        'attack_type': 'projectile',
        'world': 'newlandia',
        'from': 'merchant',
        'element': 'fire'
    })

    const [lang, setLang] = useState<string>('en')
    useEffect(() => {
        let l = localStorage.getItem('lang') || navigator.language.split('-')[0] || 'en'
        setLang(l)
        localStorage.setItem('lang', l)
    }, [])

    const addFilter = (key:string) => {
        setFilter([...filter, key])
    }
    const removeFilter = (key:string) => {
        setFilter(filter.filter(v => v !== key))
    }

    return <>
        <div className="w-full h-full flex flex-col items-center justify-around bg-[#eee] dark:bg-black">
            <h1 className='text-xl font-bold select-none'>{tl('tower_list', lang)}</h1>
            <div className="flex flex-row justify-between items-center gap-3" style={{width:'80%'}}>
                <button className="w-20" onClick={e => setOnFilter(!onFilter)}>{tl('filter', lang)}</button>
                <select name="" id="" value={sort} onChange={e => setSort(e.target.value)}>
                    <option value="sort">{tl('sort', lang)}</option>
                    <option value="name">{tl('name', lang)}</option>
                    <option value="attack_type">{tl('attack_type', lang)}</option>
                    <option value="world">{tl('world', lang)}</option>
                    <option value="from">{tl('from', lang)}</option>
                    <option value="damage">{tl('damage', lang)}</option>
                    <option value="range">{tl('range', lang)}</option>
                    <option value="dps">{tl('dps', lang)}</option>
                </select>
                <input className="w-full" type="text" name="" id="" value={search} placeholder={tl('search_desc', lang)} onChange={e => setSearch(e.target.value)} />
                <select name="" id="" value={level} onChange={e => setLevel(+e.target.value)}>
                    <option value="0">Lv.1</option>
                    <option value="1">Lv.2</option>
                    <option value="2">Lv.3</option>
                    <option value="3">Lv.4</option>
                    <option value="4">Lv.5</option>
                    <option value="5">Lv.6</option>
                    <option value="6">Lv.7</option>
                    <option value="7">Lv.8</option>
                    <option value="8">Lv.9</option>
                    <option value="9">Lv.10</option>
                </select>
            </div>
            {onFilter && <div className="flex flex-row justify-between items-center gap-3 li select-none" style={{width:'80%'}}>
                {Object.keys(typeData).map((key, index) => {
                return <div key={index} className="flex flex-row justify-between items-center gap-3">
                    <input type="checkbox" name="" id={key}
                    onChange={e => e.target.checked ? addFilter(key) : removeFilter(key)} checked={filter.includes(key)} />
                    <label htmlFor={key}>{tl(key, lang)}</label>
                    <select name="" id="" value={filterInput[key]} onChange={e => setFilterInput({...filterInput, [key]:e.target.value})}>
                        {typeData[key].map((value, index) => {
                            return <option key={index} value={value}>{tl(value, lang)}</option>
                        })}
                    </select>
                </div>})}
            </div>}
            <div className="flex flex-col gap-1 h-full overflow-y-auto" style={{width:'80%', height:`${80 - (onFilter ? 10 : 0)}%`}}>
                <div className="flex flex-row justify-between items-center w-full pl-2 pr-2">
                    <div className="flex-1 text-lg font-semibold">{tl('name', lang)}</div>
                    <div className="flex-1 text-lg">{tl('attack_type', lang)}</div>
                    <div className="flex-1 text-lg">{tl('world', lang)}</div>
                    <div className="flex-1 text-lg">{tl('from', lang)}</div>
                    <div className="flex-1 text-lg">{tl('element', lang)}</div>
                </div>
                {TowerData.filter(tower => tower.name.match(search) || tl(`${tower.name}`, lang).match(search))
                .filter(v => {
                    let result = true
                    filter.forEach(key => {
                        if (key === 'attack_type') {
                            result = result && v.attackType === filterInput[key]
                        } else if (key === 'world') {
                            result = result && v.world === filterInput[key]
                        } else if (key === 'from') {
                            result = result && v.from === filterInput[key]
                        } else if (key === 'element') {
                            result = result && v.element === filterInput[key]
                        }
                    })
                    return result
                })
                .sort((a, b) => {
                    if (sort === 'name') {
                        return tl(`${a.name}`, lang).localeCompare(tl(`${b.name}`, lang))
                    } else if (sort === 'attack_type') {
                        return tl(`${a.attackType}`, lang).localeCompare(tl(`${b.attackType}`, lang))
                    } else if (sort === 'world') {
                        return typeData['world'].indexOf(a.world) - typeData['world'].indexOf(b.world)
                    } else if (sort === 'from') {
                        return tl(`${a.from}`, lang).localeCompare(tl(`${b.from}`, lang))
                    } else if (sort === 'damage') {
                        const aDamage = a.damage ? (a.damage[level][0]+a.damage[level][1])/2 : -1
                        const bDamage = b.damage ? (b.damage[level][0]+b.damage[level][1])/2 : -1
                        return bDamage - aDamage
                    } else if (sort === 'range') {
                        const aRange = a.range ? a.range[level] : -1
                        const bRange = b.range ? b.range[level] : -1
                        return bRange - aRange
                    } else if (sort === 'dps') {
                        const aDamage = a.damage ? (a.damage[level][0]+a.damage[level][1])/2 : -1
                        const bDamage = b.damage ? (b.damage[level][0]+b.damage[level][1])/2 : -1
                        const aCooldown = a.cooldown ? a.cooldown[level] : 0
                        const bCooldown = b.cooldown ? b.cooldown[level] : 0
                        const aAttackSpeed = a.attackSpeed ? a.attackSpeed : 0
                        const bAttackSpeed = b.attackSpeed ? b.attackSpeed : 0
                        const aDps = aDamage / (aCooldown + aAttackSpeed === 0 ? 1 : aCooldown + aAttackSpeed)
                        const bDps = bDamage / (bCooldown + bAttackSpeed === 0 ? 1 : bCooldown + bAttackSpeed)
                        return bDps - aDps
                    } else {
                        return 0
                    }
                })
                .map((tower, index) => {
                    return <div className="flex flex-col justify-between items-center gap-5 li hover:li-hover shadow-md cursor-pointer select-none" key={index}
                    onClick={e => {
                        if (activated === index) setActivated(-1)
                        else setActivated(index)
                    }}>
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex-1 text-lg font-semibold">{tl(tower.name, lang)}</div>
                            <div className="flex-1 text-lg">{tl(tower.attackType, lang)}</div>
                            <div className="flex-1 text-lg">{tl(tower.world, lang)}</div>
                            <div className="flex-1 text-lg">{tl(tower.from, lang)}</div>
                            <div className="flex-1 text-lg">{tl(tower.element, lang)}</div>
                        </div>
                        {activated === index && <div className="flex flex-col gap-1 w-full">
                            <div className="text-sm mb-3">{tl(`${tower.name}_desc`, lang)}</div>
                            {tower.damage && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('damage', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.damage?.[level].join(' - ')}</div>
                            </div>}
                            {tower.criticalChance && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('critical_chance', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.criticalChance?.[level]*100}%</div>
                            </div>}
                            {tower.criticalDamage && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('critical_damage', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.criticalDamage?.[level]*100}%</div>
                            </div>}
                            {tower.range && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('range', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.range?.[level]}m</div>
                            </div>}
                            {tower.cooldown && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('cooldown', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.cooldown?.[level]}s</div>
                            </div>}
                            {tower.attackSpeed !== undefined && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('attack_speed', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.attackSpeed}s</div>
                            </div>}
                            {tower.isSplash && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('is_splash', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.isSplash ? 'True' : 'False'}</div>
                            </div>}
                            {tower.impact && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('impact', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.impact[level]}m</div>
                            </div>}
                            {tower.buffType && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('buff_type', lang)}</div>
                                <div className="flex-1 text-md text-right">{tl(tower.buffType, lang)}</div>
                            </div>}
                            {tower.buffAmount && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('buff_amount', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.buffAmount[level]}</div>
                            </div>}
                            {tower.buffDuration && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('buff_duration', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.buffDuration[level]}s</div>
                            </div>}
                            {tower.burning && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('burning', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.burning[level]}</div>
                            </div>}
                            {tower.burningDuration && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('burning_duration', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.burningDuration[level]}s</div>
                            </div>}
                            {tower.slowness && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('slowness', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.slowness[level]}</div>
                            </div>}
                            {tower.slownessDuration && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('slowness_duration', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.slownessDuration[level]}s</div>
                            </div>}
                            {tower.knockback && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('knockback', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.knockback[level]*100}%</div>
                            </div>}
                            {tower.armor && <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('armor', lang)}</div>
                                <div className="flex-1 text-md text-right">{tower.armor[level]*100}%</div>
                            </div>}
                            {(tower.damage && tower.cooldown && tower.attackSpeed !== undefined) ? <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex-1 text-md text-left">{tl('dps', lang)}</div>
                                <div className="flex-1 text-md text-right">{((tower.damage[level][0]+tower.damage[level][1])/2 / (tower.cooldown[level] + tower.attackSpeed)).toFixed(2)}</div>
                            </div> : <></>}
                        </div>}
                    </div>
                })}
            </div>
        </div>
    </>
}