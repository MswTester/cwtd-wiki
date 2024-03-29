type KeyString = {[key:string]:string};
const langText:{[key:string]:KeyString} = {
    'en':{
        'title': 'Citywars TD Guides',
        'home': 'Home',
        'guides': 'Guides',
        'towers': 'Towers',
        'enemies': 'Enemies',
        'towers_desc': 'See all the towers in the game and their stats.',
        'worlds': 'Worlds',
        'worlds_desc': 'See all the worlds in the game and their hidden maps.',
        'tower_list': 'Tower List',
        'filter': 'Filter',
        'sort': 'Sort',
        'search': 'Search',
        'search_desc': 'Search for a tower by name.',
        'name': 'Name',
        'attack_type': 'Attack Type',
        'world': 'World',
        'from': 'From',
        'element': 'Element',
        'tags': 'Tags',
        'damage': 'Damage',
        'critical_chance': 'Critical Chance',
        'critical_damage': 'Critical Damage',
        'range': 'Range',
        'attack_speed': 'Attack Speed',
        'cooldown': 'Cooldown',
        'is_splash': 'Splash',
        'impact': 'Impact',
        'buff_amount': 'Buff Amount',
        'buff_duration': 'Buff Duration',
        'buff_type': 'Buff Type',
        'burning': 'Burning Damage',
        'burning_duration': 'Burning Duration',
        'knockback': 'Knockback',
        'slowness': 'Slowness',
        'slowness_duration': 'Slowness Duration',
        'armor': 'Armor',
        'dps': 'DPS',
        'projectile': 'Projectile',
        'install': 'Install',
        'melee': 'Melee',
        'summon': 'Summon',
        'summon_proj': 'Summon Projectile',
        'buff': 'Buff',
        'debuff': 'Debuff',
        'newlandia': 'Newlandia',
        'noblewood': 'Noblewood',
        'hopetown': 'Hopetown',
        'woodland': 'Woodland',
        'fallburg': 'Fallburg',
        'soulburg': 'Soulburg',
        'swampland': 'Swampland',
        'ironhold': 'Ironhold',
        'purplix': 'Purplix',
        'crab_island': 'Crab Island',
        'moon_station': 'Moon Station',
        'event': 'Event',
        'default': 'Default',
        'merchant': 'Merchant',
        'witch_parkour': 'Witch Parkour',
        'hidden_parkour': 'Hidden Parkour',
        'parkour': 'Parkour',
        'hidden_map': 'Hidden Map',
        'community_quest': 'Community Quest',
        'fire': 'Fire',
        'grass': 'Grass',
        'water': 'Water',
        'legendary': 'Legendary',
        'manual': 'Manual',
        'heal': "Health Regen",
        'speed': "Speed",
        'none': 'None',
    },
    'ko':{
        'title': '시티워즈 TD 가이드',
        'home': '홈',
        'guides': '가이드',
        'towers': '타워',
        'enemies': '적',
        'towers_desc': '게임 내 모든 타워와 그들의 스탯을 확인하세요.',
        'worlds': '월드',
        'worlds_desc': '게임 내 모든 월드와 그들의 히든 맵을 확인하세요.',
        'tower_list': '타워 목록',
        'filter': '필터',
        'sort': '정렬',
        'search': '검색',
        'search_desc': '타워 이름으로 검색하세요.',
        'name': '이름',
        'attack_type': '공격 타입',
        'world': '월드',
        'from': '출처',
        'element': '속성',
        'tags': '태그',
        'damage': '데미지',
        'critical_chance': '크리티컬 확률',
        'critical_damage': '크리티컬 데미지',
        'range': '사거리',
        'attack_speed': '공격 속도',
        'cooldown': '쿨다운',
        'is_splash': '스플래시',
        'impact': '임팩트',
        'buff_amount': '버프량',
        'buff_duration': '버프 지속 시간',
        'buff_type': '버프 타입',
        'burning': '화상 데미지',
        'burning_duration': '화상 지속 시간',
        'knockback': '넉백',
        'slowness': '슬로우',
        'slowness_duration': '슬로우 지속 시간',
        'armor': '방어력',
        'dps': 'DPS',
        'projectile': '투사체',
        'install': '설치',
        'melee': '근접',
        'summon': '소환',
        'summon_proj': '소환 투사체',
        'buff': '버프',
        'debuff': '디버프',
        'newlandia': '뉴랜디아',
        'noblewood': '노블우드',
        'hopetown': '희망마을',
        'woodland': '삼림지',
        'fallburg': '폴버그',
        'soulburg': '소울버그',
        'swampland': '슾지대',
        'ironhold': '아이언홀드',
        'purplix': '퍼플릭스',
        'crab_island': '크랩 아일랜드',
        'moon_station': '달 기지',
        'event': '이벤트',
        'default': '기본',
        'merchant': '상인',
        'witch_parkour': '마녀의 파쿠르',
        'hidden_parkour': '숨겨진 파쿠르',
        'parkour': '파쿠르',
        'hidden_map': '숨겨진 맵',
        'community_quest': '커뮤니티 퀘스트',
        'fire': '불',
        'grass': '풀',
        'water': '물',
        'legendary': '전설',
        'manual': '수동',
        'heal': "체력 회복",
        'speed': "속도",
        'none': '없음',
    },
}

const tl = (text:string, lang:string):string => {
    return langText[lang][text] || text;
}

export default tl;