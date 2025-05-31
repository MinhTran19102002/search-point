'use client'

import { BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";


const SubjectFilter = (prop: any) => {
    const { onSetData, selectedSubject } = prop

    const [showSubjectDropdown, setShowSubjectDropdown] = useState<boolean>(false); // hien thi dropdown

    const subjects = [
        { value: 'toan', label: 'Toán' },
        { value: 'ngu_van', label: 'Ngữ Văn' },
        { value: 'ngoai_ngu', label: 'Ngoại ngữ' },
        { value: 'vat_li', label: 'Vật lý' },
        { value: 'Chemistry', label: 'Hóa học' },
        { value: 'sinh_hoc', label: 'Sinh học' },
        { value: 'lich_su', label: 'Lịch sử' },
        { value: 'dia_li', label: 'Địa lý' },
        { value: 'gdcd', label: 'Giáo dục công dân' },
    ];

    const getSubjectLabel = (value: string) => {
        const subject = subjects.find(s => s.value === value);
        return subject ? subject.label : 'Toán';
    };

    return (
        <div className="mb-6">
            <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Lọc theo môn học:</span>
                </div>
                <div className="relative z-50">
                    <button
                        onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
                        className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-w-[200px] justify-between"
                    >
                        <span>{getSubjectLabel(selectedSubject)}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${showSubjectDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showSubjectDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                            {subjects.map((subject) => (
                                <button
                                    key={subject.value}
                                    onClick={() => {
                                        onSetData(subject.value);
                                        setShowSubjectDropdown(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${selectedSubject === subject.value
                                        ? 'bg-blue-50 text-blue-700 font-medium'
                                        : 'text-gray-700'
                                        }`}
                                >
                                    {subject.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SubjectFilter;